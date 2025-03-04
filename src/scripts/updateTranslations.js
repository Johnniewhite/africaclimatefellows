/**
 * This is a utility script to help add missing translations to the LanguageContext.
 * 
 * Instructions:
 * 1. Add your English text in the format: 'key': 'English text'
 * 2. Run this script with Node.js
 * 3. Copy the output and add it to the translations object in LanguageContext.tsx
 * 
 * Example usage:
 * node updateTranslations.js
 */

const englishTexts = {
  // About page
  'about.title': 'About Us',
  'about.subtitle': 'Empowering Africa\'s youth to lead climate justice initiatives',
  'about.fellowship.title': 'About the Fellowship',
  'about.fellowship.description': 'A transformative initiative dedicated to harnessing the adventurous spirit, resilience, and innovative leadership of African youth.',
  'about.mission.title': 'Our Mission',
  'about.mission.description': 'To equip young African climate activists with the tools, networks, funding and mentorship needed to address the intersectional challenges of climate change across the continent.',
  'about.climateAction.title': 'Climate Action',
  'about.climateAction.description': 'Leading initiatives for sustainable environmental change across Africa',
  'about.youthEmpowerment.title': 'Youth Empowerment',
  'about.youthEmpowerment.description': 'Building the next generation of climate justice leaders',
  'about.communityImpact.title': 'Community Impact',
  'about.communityImpact.description': 'Creating lasting positive change in local communities',
  'about.team.title': 'Our Team',
  'about.viewProfile': 'View Profile',
  'about.joinMovement.title': 'Join Our Movement',
  'about.joinMovement.description': 'Be part of a transformative journey towards climate justice in Africa. Apply now to become a Climate Justice Fellow.',
  'about.learnFellowship': 'Learn About the Fellowship',
  
  // Add more translations as needed
};

// Generate French translations (placeholder - these should be properly translated)
const frenchTexts = {};
Object.keys(englishTexts).forEach(key => {
  // This is just a placeholder. In a real scenario, you would use proper translations.
  frenchTexts[key] = `[FR] ${englishTexts[key]}`;
});

// Format for output
console.log('English translations:');
console.log('{');
Object.entries(englishTexts).forEach(([key, value]) => {
  console.log(`  '${key}': '${value.replace(/'/g, "\\'")}',`);
});
console.log('}');

console.log('\nFrench translations:');
console.log('{');
Object.entries(frenchTexts).forEach(([key, value]) => {
  console.log(`  '${key}': '${value.replace(/'/g, "\\'")}',`);
});
console.log('}'); 