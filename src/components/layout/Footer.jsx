const Footer = () => {
  // Manually set the last updated date
  const lastUpdated = new Date("2025-06-19T11:00:00"); // YYYY-MM-DDTHH:MM:SSd

  return (
    <footer className="backdrop-blur-sm border-t border-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="text-center mt-4 text-h4">
          {"Last updated"}:{" "}
          {lastUpdated.toLocaleDateString({
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
          <div className="mt-2">
            {"© 2025 Mathys Loiselle. All Rights Reserved."}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
