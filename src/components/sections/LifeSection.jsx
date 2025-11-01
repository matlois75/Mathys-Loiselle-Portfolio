import TravelPlaces from "./TravelPlaces";

const LifeSection = () => (
  <section id="life" className="py-20">
    <div className="container mx-auto px-4 space-y-12">
      <h2 className="text-h1 uppercase tracking-wide">5. Life</h2>
      <div className="space-y-12">
        {/* Personal Interests */}
        <div>
          {/* Sports */}
          <h3 className="text-h2 uppercase tracking-wide">5.1 Hobbies</h3>
          <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-2 text-p">
            {[
              { name: "Ice Hockey", emoji: "🏒" },
              { name: "Snowboarding", emoji: "🏂" },
              { name: "Table Tennis", emoji: "🏓" },
              { name: "Tennis", emoji: "🎾" },
              { name: "Bouldering", emoji: "🧗" },
              { name: "Biking", emoji: "🚴" },
              { name: "Soccer", emoji: "⚽" },
              { name: "Hiking", emoji: "🥾" },
              { name: "Gym", emoji: "🏋️" },
            ].map((sport) => (
              <li key={sport.name} className="flex items-center">
                <span className="mr-2 text-xl">{sport.emoji}</span>
                {sport.name}
              </li>
            ))}
          </ul>
        </div>
        {/* Traveling */}
        <div>
          <h3 className="text-h2 uppercase tracking-wide">5.2 Travel</h3>
          <div className="mt-4">
            <TravelPlaces />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default LifeSection;
