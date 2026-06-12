import HeroSection from "@/components/HeroSection"
import { TextGradientScroll } from "@/components/ui/text-gradient-scroll"
import { Timeline } from "@/components/ui/timeline"
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials"
import { motion } from "framer-motion"
import SmoothScrollHero from "@/components/ui/smooth-scroll-hero"

export default function Index() {
  const missionStatement =
    "В «Дыши и Властвуй» мы верим: каждый вдох — это выбор, каждый выдох — освобождение. Рождённые из любви к осознанному движению, мы объединяем людей, которых связывает стремление к гармонии тела и разума. Пришёл ли ты за гибкостью, внутренним покоем или силой — мы здесь, чтобы помочь тебе раскрыться. Наше сообщество живёт ритмом дыхания, глубиной практики и радостью общих открытий. Присоединяйся — практикуй не только ради формы, но ради свободы, осознанности и чистой любви к себе."

  const timelineEntries = [
    {
      id: 1,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RJ3iTXUn5SUexF6nHMZYhMoQLNCboK.png",
      alt: "Первые шаги в йоге",
      title: "Каждый вдох важен",
      description:
        "От первого занятия на коврике до уверенной стойки на руках — у каждого практика своя история. В «Дыши и Властвуй» мы принимаем новичков, которые только делают первые шаги. Твой уровень не важен — важно твоё желание расти. Чего ты ждёшь?",
      layout: "left" as const,
    },
    {
      id: 2,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LN9OPh9hw0b9rwSPRSslHoejcfoKHe.png",
      alt: "Глубокая йога-практика",
      title: "Найди своё равновесие",
      description:
        "Ищешь гибкость, спокойствие или силу — наше сообщество принимает каждого. От начинающих до опытных практиков, от хатха до виньясы — здесь найдётся место именно для тебя. Вопрос один: чего ты ждёшь?",
      layout: "right" as const,
    },
    {
      id: 3,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1FdGyjVpWQANGzsDWpoPIvF5SVI2za.png",
      alt: "Сообщество йоги",
      title: "Стань частью практики",
      description:
        "Йога — это не только асаны, это моменты. Утренние медитации, совместные открытия, коллективный рост. В «Дыши и Властвуй» ты вступаешь не просто в клуб — ты становишься частью семьи. Расстели коврик и открой, на что ты способен. Серьёзно, чего ты ждёшь?",
      layout: "left" as const,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Mission Statement Section with Grid Background */}
      <section id="mission" className="relative min-h-screen flex items-center justify-center py-20 bg-white">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black tracking-wider mb-12 text-gray-900">НАША ФИЛОСОФИЯ</h2>
            <TextGradientScroll
              text={missionStatement}
              className="text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed text-gray-800"
              type="word"
              textOpacity="soft"
            />
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="community" className="relative py-20 bg-white">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

        <div className="relative z-10">
          <div className="container mx-auto px-6 mb-16">
            <div className="text-center">
              <h2 className="text-4xl md:text-6xl font-black tracking-wider mb-6 text-gray-900">МЕСТО ДЛЯ КАЖДОГО</h2>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
                У каждого практика свой путь. Вот лишь несколько историй из нашего открытого сообщества.
              </p>
            </div>
          </div>

          <Timeline entries={timelineEntries} />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative py-20 bg-white">
        {/* Subtle Grid Pattern */}
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
              Что говорят наши{" "}
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">ПРАКТИКИ</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
              Реальные истории от людей, которые нашли гармонию и силу вместе с «Дыши и Властвуй».
            </p>
          </motion.div>

          <StaggerTestimonials />
        </div>
      </section>

      {/* Smooth Scroll Hero with CTA Overlay */}
      <section id="join" className="relative">
        <SmoothScrollHero
          scrollHeight={2500}
          desktopImage="/images/runners-motion-blur.png"
          mobileImage="/images/runners-motion-blur.png"
          initialClipPercentage={30}
          finalClipPercentage={70}
        />
      </section>
    </div>
  )
}