import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const testimonials = [
  {
    text: 'The best way to find yourself is to lose yourself in the service of others.',
    author: 'Mahatma Gandhi',
  },
  {
    text: `Every good act is charity. A man's true wealth hereafter is the good that he does in this world to his fellows`,
    author: 'Lex Collins',
  },
  {
    text: 'When one gives, two get happy',
    author: 'Amit Kalantri',
  },
  {
    text: 'Everyone can experience the joy and blessing of generosity; because everyone has something to give.',
    author: 'Jan Grace',
  },
]

const QuotesCarousel = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTestimonial(
        (prevTestimonial) => (prevTestimonial + 1) % testimonials.length,
      )
    }, 5000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  const { text, author, image } = testimonials[currentTestimonial]

  const variants = {
    initial: { opacity: 0, y: '100%', scale: 0.1 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: '100%', scale: 0.1 },
  }
  const dotVariants = {
    active: { scale: 1.2, backgroundColor: '#3f3f46' },
    inactive: { scale: 1, backgroundColor: '#D1D5DB' },
  }

  return (
    <div className=' w-full h-[300px] flex justify-center items-center '>
      <section className="py-12 md:py-24 ">
        <div className="w-full max-w-2xl">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={currentTestimonial}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={variants}
              className="flex w-full flex-col items-center justify-center"
              transition={{
                type: 'spring',
                stiffness: 200,
                damping: 20,
                duration: 0.5,
              }}
            >
              <p className="m-0 text-center text-2xl font-medium tracking-tight">
                &quot;{text}&quot;
              </p>
              <div className="mx-auto mt-5">
                <div className="flex flex-col items-center justify-center space-x-3">
                  <div className="font-regular text-sm text-gray-900/80">
                    {author}
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="mt-8 flex justify-center">
              {testimonials.map((_, index) => (
                <motion.div
                  key={index}
                  className="mx-1 h-1 w-1 cursor-pointer rounded-full"
                  variants={dotVariants}
                  animate={index === currentTestimonial ? 'active' : 'inactive'}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  )
}

export default QuotesCarousel