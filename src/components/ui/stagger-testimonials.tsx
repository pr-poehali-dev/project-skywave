import type React from "react"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const SQRT_5000 = Math.sqrt(5000)

// Portfolio testimonials data
const testimonials = [
  {
    tempId: 0,
    testimonial:
      "Олег — один из самых упорных людей на курсе. Когда все сдавались на сложной задаче, он продолжал разбираться, пока не понял до конца.",
    by: "Артём, однокурсник",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=Artem&backgroundColor=3b82f6&textColor=ffffff",
  },
  {
    tempId: 1,
    testimonial:
      "Он задаёт правильные вопросы. Не «дай ответ», а «объясни, почему». Это редкость среди новичков и признак того, что человек действительно растёт.",
    by: "Марина, ментор на онлайн-курсе",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=Marina&backgroundColor=10b981&textColor=ffffff",
  },
  {
    tempId: 2,
    testimonial:
      "Мы вместе делали учебный проект. Олег взял на себя самую сложную часть и не сдался, даже когда пришлось переписать всё с нуля.",
    by: "Дима, партнёр по учёбе",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=Dima&backgroundColor=8b5cf6&textColor=ffffff",
  },
  {
    tempId: 3,
    testimonial:
      "Таких целеустремлённых студентов мало. Олег учится не ради галочки — он реально хочет понять, как всё устроено под капотом.",
    by: "Алексей, преподаватель",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=Aleksey&backgroundColor=ef4444&textColor=ffffff",
  },
  {
    tempId: 4,
    testimonial:
      "Мне нравится его подход: сначала попробовать самому, потом спросить. Он уважает чужое время и умеет формулировать проблему чётко.",
    by: "Катя, участница учебного чата",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=Katya&backgroundColor=f59e0b&textColor=ffffff",
  },
  {
    tempId: 5,
    testimonial:
      "Олег — тот, кто не стесняется начинать с нуля. Видел, как он за неделю разобрал тему, в которой неделю назад не понимал вообще ничего.",
    by: "Игорь, сосед по коворкингу",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=Igor&backgroundColor=6366f1&textColor=ffffff",
  },
  {
    tempId: 6,
    testimonial:
      "Он объяснял мне вещи, которые сам только недавно выучил — и делал это понятно. Умение объяснять — признак настоящего понимания.",
    by: "Света, однокурсница",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=Sveta&backgroundColor=ec4899&textColor=ffffff",
  },
  {
    tempId: 7,
    testimonial:
      "Знаю Олега как человека, который не ищет лёгких путей. Он мог бы скопировать решение, но всегда выбирает разобраться сам.",
    by: "Антон, друг",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=Anton&backgroundColor=06b6d4&textColor=ffffff",
  },
  {
    tempId: 8,
    testimonial:
      "На нашем хакатоне он за ночь освоил инструмент, с которым никогда не работал. Вот это называется быстрое обучение.",
    by: "Лена, капитан команды",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=Lena&backgroundColor=f97316&textColor=ffffff",
  },
  {
    tempId: 9,
    testimonial:
      "Он честен с собой. Не притворяется, что знает больше, чем знает — и именно поэтому растёт быстрее многих.",
    by: "Павел, старший разработчик",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=Pavel&backgroundColor=84cc16&textColor=ffffff",
  },
  {
    tempId: 10,
    testimonial:
      "Видно, что программирование для него — не просто работа в будущем, а настоящее увлечение. Такие люди становятся хорошими разработчиками.",
    by: "Наташа, ментор",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=Natasha&backgroundColor=a855f7&textColor=ffffff",
  },
  {
    tempId: 11,
    testimonial:
      "Он не боится задавать «глупые» вопросы. А именно из таких вопросов и рождается настоящее понимание.",
    by: "Рустам, однокурсник",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=Rustam&backgroundColor=059669&textColor=ffffff",
  },
  {
    tempId: 12,
    testimonial:
      "Олег следит за трендами, читает документацию, смотрит доклады. Это не каждый делает добровольно — а он делает.",
    by: "Нина, участница сообщества",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=Nina&backgroundColor=0ea5e9&textColor=ffffff",
  },
  {
    tempId: 13,
    testimonial:
      "Мы обсуждали архитектуру проекта — и я был удивлён глубиной его вопросов для человека с таким небольшим опытом.",
    by: "Роман, тимлид",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=Roman&backgroundColor=dc2626&textColor=ffffff",
  },
  {
    tempId: 14,
    testimonial:
      "Он делает код аккуратно. Не ради перфекционизма, а потому что понимает: читаемый код — это уважение к другим.",
    by: "Екатерина, ревьюер",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=Ekaterina&backgroundColor=7c3aed&textColor=ffffff",
  },
  {
    tempId: 15,
    testimonial:
      "После фидбека он не обижается — анализирует и исправляет. Это профессиональный подход, который редко встретишь у начинающих.",
    by: "Данила, участник code-review",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=Danila&backgroundColor=ea580c&textColor=ffffff",
  },
  {
    tempId: 16,
    testimonial:
      "Олег помогает другим в учебном чате — хотя сам ещё учится. Это говорит о характере.",
    by: "Рая, участница курса",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=Raya&backgroundColor=16a34a&textColor=ffffff",
  },
  {
    tempId: 17,
    testimonial:
      "Видел его коммиты в учебном репозитории — каждый день, без пропусков, две недели подряд. Это дисциплина.",
    by: "Кирилл, однокурсник",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=Kirill&backgroundColor=2563eb&textColor=ffffff",
  },
  {
    tempId: 18,
    testimonial:
      "Он не боится начинать проект с нуля, если понял, что первый подход был неверным. Это зрелость, которой многим не хватает.",
    by: "Александр, наставник",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=Alexander&backgroundColor=be185d&textColor=ffffff",
  },
  {
    tempId: 19,
    testimonial:
      "Работать с Олегом будет интересно любой команде. Он приносит энергию, желание учиться и честность — а это ценнее любых навыков.",
    by: "Карина, HR в IT-компании",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=Karina&backgroundColor=0891b2&textColor=ffffff",
  },
]

interface TestimonialCardProps {
  position: number
  testimonial: (typeof testimonials)[0]
  handleMove: (steps: number) => void
  cardSize: number
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ position, testimonial, handleMove, cardSize }) => {
  const isCenter = position === 0
  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out",
        isCenter
          ? "z-10 bg-gray-900 text-white border-gray-900"
          : "z-0 bg-white text-gray-900 border-gray-200 hover:border-gray-400",
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%)
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px hsl(var(--border))" : "0px 0px 0px 0px transparent",
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-gray-300"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2,
        }}
      />
      <img
        src={testimonial.imgSrc || "/placeholder.svg"}
        alt={`${testimonial.by.split(",")[0]}`}
        className="mb-4 h-14 w-12 bg-gray-100 object-cover object-top"
        style={{
          boxShadow: "3px 3px 0px hsl(var(--background))",
        }}
      />
      <h3 className={cn("text-base sm:text-xl font-medium", isCenter ? "text-white" : "text-gray-900")}>
        "{testimonial.testimonial}"
      </h3>
      <p
        className={cn(
          "absolute bottom-8 left-8 right-8 mt-2 text-sm italic",
          isCenter ? "text-gray-300" : "text-gray-600",
        )}
      >
        - {testimonial.by}
      </p>
    </div>
  )
}

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365)
  const [testimonialsList, setTestimonialsList] = useState(testimonials)

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList]
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift()
        if (!item) return
        newList.push({ ...item, tempId: Math.random() })
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop()
        if (!item) return
        newList.unshift({ ...item, tempId: Math.random() })
      }
    }
    setTestimonialsList(newList)
  }

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)")
      setCardSize(matches ? 365 : 290)
    }
    updateSize()
    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  return (
    <div className="relative w-full overflow-hidden bg-white" style={{ height: 600 }}>
      {testimonialsList.map((testimonial, index) => {
        const position =
          testimonialsList.length % 2 ? index - (testimonialsList.length + 1) / 2 : index - testimonialsList.length / 2
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        )
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-white border-2 border-gray-300 hover:bg-gray-900 hover:text-white",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2",
          )}
          aria-label="Предыдущий отзыв"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-white border-2 border-gray-300 hover:bg-gray-900 hover:text-white",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2",
          )}
          aria-label="Следующий отзыв"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  )
}