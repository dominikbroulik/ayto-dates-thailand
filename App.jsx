import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, MapPin, Clock, Camera, Shirt, Hammer, Film, X, ExternalLink, Tag, Users, Lightbulb } from "lucide-react";

const dates = [
  {
    id: 1,
    title: "Beach Cafe Date",
    category: "get to know",
    people: "2 - 3 people",
    location: "Rosana Cafe",
    driveTime: "30 min",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Rosana+Cafe+Thailand",
    shortDescription: "Lunch or dinner in a beach cafe with ocean and island views. The seating setup is designed for friendly interaction and allows a third participant to naturally join the date.",
    imageGroups: [
      {
        title: "Arrival",
        images: [
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
        ]
      },
      {
        title: "Reality",
        images: [
          "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80"
        ]
      }
    ],
    dateFlow: [
      {
        title: "1. Arrival",
        description: "Slow-motion arrival walk on the beach near the ocean. Scenic introduction of participants and location."
      },
      {
        title: "2. Reality",
        description: "Sitting, food, drinks and conversation. Friendly atmosphere designed for natural interaction and possible inclusion of a third participant."
      },
      {
        title: "3. Clip",
        description: "Short cinematic montage of the setup, beach atmosphere, drinks, palms, ocean and tropical details for crosscut usage."
      },
      {
        title: "4. Reality / Ending",
        description: "Final conversation and wrap-up of the date before departure."
      }
    ],
    detailedDescription:
      "Ideal date for first introductions and getting to know each other. Beachfront location with scenic ocean and island views. The cafe has a tropical and exotic vibe with palms, surf aesthetics and relaxed beach energy. The setup should support easy conversation and natural chemistry between participants.",
    setDesign:
      "Need to finalize visual setup according to reference images. Recommended setup: prosecco, tapas, styled table setup, elegant but relaxed tropical atmosphere.",
    camera:
      "Medium wide master shot, initially 2x close-up cameras and after the arrival of the third participant switch to 3x close-up coverage. Slow-motion beach shots and cinematic montage of the date.",
    lighting:
      "Bounce board and butterfly diffusion if possible. Around 15:30 the location should naturally fall into shade. Avoid shooting directly into backlight.",
    costume:
      "Smart casual / dresses.",
    productionNotes: ""
  },
  {
    id: 4,
    title: "Drinks at the Surf Bar",
    category: "get to know / romantic",
    people: "2 people",
    location: "Rosana Cafe",
    driveTime: "30 min",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Rosana+Cafe+Thailand",
    shortDescription: "Drinks at a tropical surf bar on the beach.",
    imageGroups: [
      {
        title: "Arrival / Reality",
        images: [
          "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80"
        ]
      },
      {
        title: "Reality",
        images: [
          "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=80"
        ]
      }
    ],
    dateFlow: [
      {
        title: "1. Reality",
        description: "Arrival to the tropical surf bar on the beach and first interaction in the evening atmosphere."
      },
      {
        title: "2. Clip",
        description: "Drink mixing montage. Participants can either prepare drinks themselves or have them prepared by bartender for cinematic inserts."
      },
      {
        title: "3. Reality",
        description: "Conversation over drinks with ocean view and atmospheric lighting in the background."
      }
    ],
    detailedDescription:
      "Ideal date for first evening introductions or sunset interaction. Ocean view, tropical surf cafe atmosphere and warm ambient lighting create relaxed but visually cinematic mood. During the date someone can prepare drinks for participants, or they can mix the drinks themselves for clip usage.",
    setDesign:
      "Tropical / surf-style bar setup, cocktail mixing tools, decorative bar details and atmospheric props.",
    camera:
      "Medium wide master shot + 2x close-up cameras and slow-motion inserts.",
    lighting:
      "Ideally shot during evening or sunset. Practical lights can be integrated into umbrellas above the bar. Add subtle key and fill lighting. Background atmosphere is created by string lights between palm trees provided by the cafe.",
    costume:
      "Smart casual / dresses.",
    productionNotes: ""
  },

  {
    id: 6,
    title: "Dinner on the Water",
    category: "get to know / romantic",
    people: "2 people",
    location: "Canal Restaurant",
    driveTime: "15 min from villa",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=canal+restaurant+thailand",
    shortDescription: "The couple arrives by boat through a romantic canal directly to the restaurant.",
    imageGroups: [
      {
        title: "Location / Reality",
        images: [
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1200&q=80"
        ]
      },
      {
        title: "Restaurant / Reality",
        images: [
          "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80"
        ]
      }
    ],
    dateFlow: [
      {
        title: "1. Clip",
        description: "Romantic boat ride through the canal towards the restaurant."
      },
      {
        title: "2. Reality",
        description: "The couple exits the boat and begins the dinner date together."
      },
      {
        title: "3. Clip",
        description: "Atmospheric montage of the setup, water reflections, food and romantic details."
      },
      {
        title: "4. Reality",
        description: "Final part of the dinner and emotional wrap-up before departure."
      },
      {
        title: "5. Clip",
        description: "The couple leaves by boat and disappears into the canal atmosphere."
      }
    ],
    detailedDescription:
      "The couple arrives by boat through a romantic canal directly to the restaurant where a lunch or dinner setup awaits them overlooking a shellfish farm. After dinner they walk down to the pier and leave together by boat again, creating a cinematic and visually memorable ending.",
    setDesign:
      "The restaurant itself already has strong visual design. Main focus should be upgrading the boat with romantic details such as small practical lights or decorative elements.",
    camera:
      "Drone shots and slow motion. During dinner use medium wide master shot + 2x close-up cameras and cinematic inserts. Boat sections should be captured handheld from another boat together with drone coverage.",
    lighting:
      "Restaurant area will need lighting support because subjects will likely sit in backlight. If departure happens after sunset, add practical lights to the boat.",
    costume:
      "Smart casual.",
    productionNotes: "Need to arrange an additional boat for the filming crew."
  },

  {
    id: 5,
    title: "Monkey Temple Climb",
    category: "get to know / adventure",
    people: "2 - 4 people",
    location: "Khao Chong Krajok",
    driveTime: "15 min from villa",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Khao+Chong+Krajok",
    shortDescription: "A steep climb to a mountain temple surrounded by monkeys, ending with a breathtaking ocean view date.",
    imageGroups: [
      {
        title: "Arrival / Monkeys",
        images: [
          "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=1200&q=80"
        ]
      },
      {
        title: "Climb / Reality",
        images: [
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
        ]
      }
    ],
    dateFlow: [
      {
        title: "1. Reality",
        description: "Participants are welcomed by monkeys waiting near the stairs leading to the temple."
      },
      {
        title: "2. Clip",
        description: "Feeding the monkeys and capturing reactions and playful interactions."
      },
      {
        title: "3. Reality",
        description: "Steep climb up the mountain with natural conversations and physical reactions."
      },
      {
        title: "4. Clip",
        description: "Drone shots and cinematic climbing montage with scenic landscape views."
      },
      {
        title: "5. Reality",
        description: "Participants reach the summit and enjoy the reward of the panoramic ocean view."
      },
      {
        title: "6. Clip",
        description: "Spiritual atmosphere, gong strike, cinematic setup and contemplative landscape moments."
      },
      {
        title: "7. Reality",
        description: "Conversation and emotional date moment at the top before descending."
      }
    ],
    detailedDescription:
      "Ideal for a couple comfortable with climbing several hundred steep stairs. Before entering the temple stairs they encounter a group of monkeys waiting for tourists and reacting to food. This creates authentic reactions while the monkeys are generally not dangerous. During the climb participants naturally generate emotional and physical reactions, and at the summit they are rewarded with a stunning panoramic ocean view. The date ends with observing the landscape and symbolically striking the temple gong.",
    setDesign:
      "Romantic setup at the top of the mountain with subtle spiritual atmosphere.",
    camera:
      "Drone shots, handheld camera work for monkey interactions, slow motion. At the top use medium wide master shot + 2x close-up cameras and cinematic slow-motion inserts.",
    lighting:
      "No large lighting setup can realistically be carried to the top. Use bounce board and potentially small portable battery lights.",
    costume:
      "Outdoor clothing.",
    productionNotes: "Need to be careful around the monkeys and ensure participant safety during feeding interactions."
  },

  
  
];

const categories = ["All", "romantic", "adventure", "get to know"];


function InfoBlock({ icon: Icon, title, children }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
      <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-neutral-900">
        <Icon className="h-4 w-4" />
        {title}
      </div>
      <p className="text-sm leading-6 text-neutral-600">{children}</p>
    </div>
  );
}

export default function AreYouTheOneDatesBoard() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  

  const filteredDates = useMemo(() => {
    return dates.filter((date) => {
      const matchesQuery = `${date.title} ${date.location} ${date.shortDescription} ${date.category}`
        .toLowerCase()
        .includes(query.toLowerCase());
      const matchesCategory = category === "All" || date.category === category;
      return matchesQuery && matchesCategory;
    });
  }, [query, category]);

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-950">
      <header className="mx-auto max-w-7xl px-5 py-10 md:px-8">
        <div className="flex flex-col gap-6 border-b border-neutral-200 pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-neutral-500">Production selection board</p>
            <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">Are You The One Dates</h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-600">
              Minimal internal portfolio for selecting date locations, visual concepts and production notes.
            </p>
          </div>
          <div className="flex flex-col gap-3 md:w-[420px]">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search dates, location, category..."
                className="w-full rounded-2xl border border-neutral-200 bg-white py-3 pl-11 pr-4 text-sm outline-none transition focus:border-neutral-400"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((item) => (
                <button
                  key={item}
                  onClick={() => setCategory(item)}
                  className={`rounded-full border px-4 py-2 text-xs font-medium capitalize transition ${
                    category === item
                      ? "border-neutral-950 bg-neutral-950 text-white"
                      : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-400"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-5 pb-16 md:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredDates.map((date) => (
            <motion.button
              key={date.id}
              layout
              onClick={() => setSelectedDate(date)}
              className="group overflow-hidden rounded-[2rem] border border-neutral-200 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100 p-1">
                <div className="grid h-full w-full grid-cols-3 gap-1">
                  <img src={date.imageGroups[0]?.images[0]} alt="" className="col-span-2 h-full min-h-0 w-full rounded-l-[1.7rem] object-cover object-center" />
                  <div className="grid h-full min-h-0 grid-rows-2 gap-1 overflow-hidden">
                    <img src={date.imageGroups[0]?.images[1] || date.imageGroups[0]?.images[0]} alt="" className="h-full min-h-0 w-full rounded-tr-[1.7rem] object-cover object-center" />
                    <img src={date.imageGroups[1]?.images[0] || date.imageGroups[0]?.images[0]} alt="" className="h-full min-h-0 w-full rounded-br-[1.7rem] object-cover object-center" />
                  </div>
                </div>
              </div>
              <div className="p-5">
                <div className="mb-3 flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-neutral-500">
                  <Tag className="h-3.5 w-3.5" />
                  {date.category}
                  <span className="uppercase tracking-wide text-neutral-500">· {date.people}</span>
                </div>
                <h2 className="text-xl font-semibold tracking-tight text-neutral-950 group-hover:underline">{date.title}</h2>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-neutral-600">{date.shortDescription}</p>
                <div className="mt-5 flex flex-wrap gap-3 text-xs text-neutral-500">
                  <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {date.location}</span>
                  <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {date.driveTime}</span>
                  
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </main>

      <AnimatePresence>
        {selectedDate && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedDate(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.98 }}
              transition={{ duration: 0.22 }}
              onClick={(event) => event.stopPropagation()}
              className="max-h-[92vh] w-full max-w-6xl overflow-y-auto rounded-[2rem] bg-neutral-50 shadow-2xl"
            >
              <div className="sticky top-0 z-10 flex items-center justify-between border-b border-neutral-200 bg-white/90 px-5 py-4 backdrop-blur md:px-7">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">{selectedDate.category} · {selectedDate.people}</p>
                  <h2 className="mt-1 text-2xl font-semibold tracking-tight md:text-3xl">{selectedDate.title}</h2>
                </div>
                <button
                  onClick={() => setSelectedDate(null)}
                  className="rounded-full border border-neutral-200 bg-white p-3 text-neutral-700 transition hover:bg-neutral-100"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="p-5 md:p-7">
                <div className="space-y-6">
                  {selectedDate.imageGroups.map((group) => (
                    <section key={group.title}>
                      <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">{group.title}</h3>
                      <div className="grid gap-2 md:grid-cols-4">
                        {group.images.map((image, index) => (
                          <img
                            key={`${group.title}-${image}-${index}`}
                            src={image}
                            alt=""
                            className={`h-72 w-full rounded-[1.5rem] object-cover ${index === 0 ? "md:col-span-2" : ""}`}
                          />
                        ))}
                      </div>
                    </section>
                  ))}
                </div>

                <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                  <section className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
                    <h3 className="mb-3 text-lg font-semibold">Detailed description</h3>
                    <p className="text-sm leading-7 text-neutral-600">{selectedDate.detailedDescription}</p>
                    <div className="mt-5 flex flex-wrap gap-3">
                      <a
                        href={selectedDate.mapUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-neutral-950 px-4 py-2 text-sm font-medium text-white"
                      >
                        Open location map <ExternalLink className="h-4 w-4" />
                      </a>
                      <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm text-neutral-600">
                        <Clock className="h-4 w-4" /> {selectedDate.driveTime}
                      </span>
                      <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm text-neutral-600">
                        <MapPin className="h-4 w-4" /> {selectedDate.location}
                      </span>
                    </div>
                  </section>

                  <section className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
                    <h3 className="mb-3 text-lg font-semibold">Date flow</h3>
                    <div className="space-y-3">
                      {selectedDate.dateFlow.map((step, index) => {
                        const flowStyles = [
                          "bg-rose-50 border-rose-100",
                          "bg-amber-50 border-amber-100",
                          "bg-sky-50 border-sky-100",
                          "bg-violet-50 border-violet-100",
                          "bg-emerald-50 border-emerald-100"
                        ];

                        return (
                          <div
                            key={step.title}
                            className={`rounded-2xl border p-4 ${flowStyles[index % flowStyles.length]}`}
                          >
                            <div className="mb-1 flex items-center gap-2 text-sm font-semibold text-neutral-950">
                              <Film className="h-4 w-4" />
                              {step.title}
                            </div>
                            <p className="text-sm leading-6 text-neutral-600">{step.description}</p>
                          </div>
                        );
                      })}
                    </div>
                  </section>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <InfoBlock icon={Hammer} title="Set design">{selectedDate.setDesign}</InfoBlock>
                  <InfoBlock icon={Camera} title="Camera notes">{selectedDate.camera}</InfoBlock>
                  <InfoBlock icon={Lightbulb} title="Lighting">{selectedDate.lighting}</InfoBlock>
                  <InfoBlock icon={Shirt} title="Costume">{selectedDate.costume}</InfoBlock>
                  <InfoBlock icon={MapPin} title="Production notes">{selectedDate.productionNotes}</InfoBlock>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
