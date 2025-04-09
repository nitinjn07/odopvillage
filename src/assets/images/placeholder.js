// Placeholder images for development

// Function to generate a placeholder color
function getPlaceholderColor(seed) {
  const colors = [
    "#4D3319", // dark brown
    "#7A5834", // medium brown
    "#A87C50", // light brown
    "#C25E00", // accent
    "#F5EFE0", // beige
  ];

  return colors[seed % colors.length];
}

// Generate placeholder image URL with size
export function getPlaceholderImage(
  width = 600,
  height = 400,
  text = null,
  index = 0
) {
  const backgroundColor = getPlaceholderColor(index);
  const textColor = backgroundColor === "#F5EFE0" ? "#4D3319" : "#FFFFFF";

  // For development, return a placeholder.com URL
  return `https://via.placeholder.com/${width}x${height}/${backgroundColor.replace(
    "#",
    ""
  )}/${textColor.replace("#", "")}${
    text ? "?text=" + encodeURIComponent(text) : ""
  }`;
}

// Placeholder images export
export const placeholders = {
  hero: getPlaceholderImage(600, 400, "MP Artisans Going Global", 0),
  about: getPlaceholderImage(500, 400, "MP Craft Heritage", 1),
  story1: getPlaceholderImage(300, 300, "Meena Devi - Gond Artist", 2),
  story2: getPlaceholderImage(300, 300, "Ramesh Malviya - Bamboo Craftsman", 3),
  story3: getPlaceholderImage(300, 300, "Sunita Bai - Bagh Print Artisan", 4),
  partner1: getPlaceholderImage(180, 80, "Partner 1", 0),
  partner2: getPlaceholderImage(180, 80, "Partner 2", 1),
  partner3: getPlaceholderImage(180, 80, "Partner 3", 2),
  partner4: getPlaceholderImage(180, 80, "Partner 4", 3),
  partner5: getPlaceholderImage(180, 80, "Partner 5", 4),
};
