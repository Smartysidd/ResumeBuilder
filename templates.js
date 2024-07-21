// backend/templates.js
const templates = [
    {
      id: '1',
      name: 'Template 1',
      styles: {
        fontFamily: 'Arial, sans-serif',
        color: '#333',
        backgroundColor: '#f9f9f9',
        borderColor: '#ccc',
        headerColor: '#444',
      },
      content: {
        header: 'Resume',
        sections: [
          'Name',
          'Email',
          'Contact',
          'Location',
          'Skills',
          'Hobbies',
          'Achievements',
          'Certifications',
        ],
      },
    },
    {
      id: '2',
      name: 'Template 2',
      styles: {
        fontFamily: 'Georgia, serif',
        color: '#000',
        backgroundColor: '#fff',
        borderColor: '#000',
        headerColor: '#000',
      },
      content: {
        header: 'Professional Resume',
        sections: [
          'Name',
          'Email',
          'Contact',
          'Location',
          'Skills',
          'Experience',
          'Education',
          'Certifications',
        ],
      },
    },
    
  ];
  
  module.exports = templates;
  