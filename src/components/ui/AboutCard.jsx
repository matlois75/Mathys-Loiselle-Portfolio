const AboutCard = () => {
  return (
    <div className="bg-white/80 dark:bg-gray-800/40 backdrop-blur-md rounded-xl p-6 space-y-4 shadow-xl border border-gray-200/20 dark:border-gray-700/30">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
        About Me
      </h2>
      <div className="space-y-4 text-gray-700 dark:text-gray-300">
        <p>
          I&apos;m Mathys Loiselle, a third-year Computer Science student at
          Concordia University pursuing a minor in Mathematics & Statistics.
          I&apos;m passionate about the intersection of artificial intelligence,
          mathematical theory, and practical applications that push the
          boundaries of what&apos;s possible.
        </p>
        <p>
          My passion for solving complex problems has led me to explore both
          theoretical and practical applications of AI. Whether I&apos;m diving
          deep into research papers on advanced ML architectures or developing
          innovative AI solutions at TaylorMade Golf&apos;s headquarters in
          Carlsbad, I find myself consistently drawn to projects that challenge
          conventional thinking. This dual perspective - understanding both
          theoretical foundations and their real-world implementations - has
          shaped my long-term vision of contributing to the field through
          advanced research while maintaining strong connections to practical
          applications.
        </p>
        <p>
          Beyond technical expertise, what truly drives me is the desire to push
          the boundaries of AI technology while ensuring its responsible and
          meaningful implementation. I believe my combined background in
          Computer Science and Mathematics positions me uniquely to contribute
          to both groundbreaking research and its practical applications, as
          these fields continue to evolve and shape our future.
        </p>
      </div>
    </div>
  );
};

export default AboutCard;
