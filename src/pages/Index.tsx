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
      alt: "Хатха-йога для начинающих",
      title: "Хатха-йога",
      description:
        "Классическая практика для тех, кто только начинает. Мягкие асаны, работа с дыханием и основы медитации. Подходит для любого возраста и уровня подготовки — твоё тело само подскажет темп.",
      layout: "left" as const,
    },
    {
      id: 2,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LN9OPh9hw0b9rwSPRSslHoejcfoKHe.png",
      alt: "Виньяса-флоу",
      title: "Виньяса-флоу",
      description:
        "Динамичная практика, где движение следует за дыханием. Каждый урок — новая последовательность, новый вызов, новое открытие. Развивает силу, гибкость и концентрацию одновременно.",
      layout: "right" as const,
    },
    {
      id: 3,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1FdGyjVpWQANGzsDWpoPIvF5SVI2za.png",
      alt: "Медитация и пранаяма",
      title: "Медитация и пранаяма",
      description:
        "Практики осознанного дыхания и тишины. Научись управлять своим состоянием, снижать стресс и находить внутренний центр в любой ситуации. Это и есть настоящая власть над собой.",
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

      {/* Journey Timeline */}
      <section id="community" className="relative py-20 bg-white">
        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

        <div className="relative z-10">
          <div className="container mx-auto px-6 mb-16">
            <div className="text-center">
              <h2 className="text-4xl md:text-6xl font-black tracking-wider mb-6 text-gray-900">НАШИ ПРАКТИКИ</h2>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
                Три направления — одна цель: помочь тебе почувствовать себя целым.
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
              Что говорят наши{" "}
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">ПРАКТИКИ</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
              Реальные истории людей, которые нашли гармонию вместе с нами.
            </p>
          </motion.div>

          <StaggerTestimonials />
        </div>
      </section>

      {/* CTA Section */}
      <section id="join" className="relative">
        <SmoothScrollHero
          scrollHeight={2500}
          desktopImage="https://cdn.poehali.dev/projects/03d7716a-3301-4f8a-8434-cd5be43d8e71/files/70d35895-0448-467d-b563-34d57f19196e.jpg"
          mobileImage="https://cdn.poehali.dev/projects/03d7716a-3301-4f8a-8434-cd5be43d8e71/files/70d35895-0448-467d-b563-34d57f19196e.jpg"
          initialClipPercentage={30}
          finalClipPercentage={70}
        />
      </section>
    </div>
  )
}