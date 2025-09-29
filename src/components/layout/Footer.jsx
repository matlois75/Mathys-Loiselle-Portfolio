const Footer = () => {
  // Manually set the last updated date
  const lastUpdated = new Date("September 29, 2025"); // YYYY-MM-DDTHH:MM:SSd

  return (
    <footer className="backdrop-blur-sm border-t border-gray-900">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 py-4 sm:py-6">
        <div className="text-center mt-2 sm:mt-4 text-h4">
          {"Last updated"}:{" "}
          {lastUpdated.toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
          <div className="mt-1 sm:mt-2">
            {"© 2025 Mathys Loiselle. All Rights Reserved."}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
