import HeroSection from "@/components/HeroSection"
import { TextGradientScroll } from "@/components/ui/text-gradient-scroll"
import { Timeline } from "@/components/ui/timeline"
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials"
import { motion } from "framer-motion"
import SmoothScrollHero from "@/components/ui/smooth-scroll-hero"

export default function Index() {
  const aboutStatement =
    "Меня зовут Олег, и я только начинаю свой путь в программировании. Каждый день — это новая задача, новый баг, новое открытие. Я верю, что любой сложный код когда-то казался кому-то невозможным — и всё же был написан. Я здесь, чтобы учиться, расти и однажды создавать вещи, которые будут важны людям. Это не просто карьера — это образ мышления, который меняет тебя каждый день."

  const timelineEntries = [
    {
      id: 1,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RJ3iTXUn5SUexF6nHMZYhMoQLNCboK.png",
      alt: "Первые шаги в программировании",
      title: "С чего всё началось",
      description:
        "Первая строчка кода — и что-то щёлкнуло. Я понял, что это не просто набор символов, это язык, на котором можно говорить с машиной. Страшно, непонятно, но невероятно интересно. С этого момента я не мог остановиться.",
      layout: "left" as const,
    },
    {
      id: 2,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LN9OPh9hw0b9rwSPRSslHoejcfoKHe.png",
      alt: "Учёба и практика",
      title: "Учусь каждый день",
      description:
        "Курсы, статьи, YouTube в 2 часа ночи, баги которые не фиксятся часами — это и есть моя реальность. Каждая решённая задача — маленькая победа. Каждый новый проект — шаг вперёд. Прогресс не всегда виден сразу, но он есть.",
      layout: "right" as const,
    },
    {
      id: 3,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1FdGyjVpWQANGzsDWpoPIvF5SVI2za.png",
      alt: "Цели и будущее",
      title: "Куда иду",
      description:
        "Я хочу создавать продукты, которые решают реальные проблемы. Пока учусь основам — но уже думаю о первом коммерческом проекте. Программирование открыло мне новый способ смотреть на мир: любую задачу можно разложить на шаги и решить.",
      layout: "left" as const,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />

      {/* About Section */}
      <section id="mission" className="relative min-h-screen flex items-center justify-center py-20 bg-white">
        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black tracking-wider mb-12 text-gray-900">КТО Я</h2>
            <TextGradientScroll
              text={aboutStatement}
              className="text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed text-gray-800"
              type="word"
              textOpacity="soft"
            />
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section id="community" className="relative py-20 bg-white">
        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

        <div className="relative z-10">
          <div className="container mx-auto px-6 mb-16">
            <div className="text-center">
              <h2 className="text-4xl md:text-6xl font-black tracking-wider mb-6 text-gray-900">МОЙ ПУТЬ</h2>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
                Честная история о том, как я иду от нуля к первому проекту.
              </p>
            </div>
          </div>

          <Timeline entries={timelineEntries} />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative py-20 bg-white">
        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-black tracking-wider text-gray-900 mb-6">
              Что говорят{" "}
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">ОБО МНЕ</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
              Отзывы людей, с которыми я учился, работал и общался в процессе роста.
            </p>
          </motion.div>

          <StaggerTestimonials />
        </div>
      </section>

      {/* CTA Section */}
      <section id="join" className="relative">
        <SmoothScrollHero
          scrollHeight={2500}
          desktopImage="https://cdn.poehali.dev/projects/03d7716a-3301-4f8a-8434-cd5be43d8e71/files/0d460179-73ee-4b44-9bd8-ee35ccaeb6dd.jpg"
          mobileImage="https://cdn.poehali.dev/projects/03d7716a-3301-4f8a-8434-cd5be43d8e71/files/0d460179-73ee-4b44-9bd8-ee35ccaeb6dd.jpg"
          initialClipPercentage={30}
          finalClipPercentage={70}
        />
      </section>
    </div>
  )
}
