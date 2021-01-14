export const resumeState = {
  // ----------------- Static -----------------
  options: [
    // Section labels, includeKeys, and fontKeys
    // Font headings are stored with their respective fonts:{}
    // Keywords are stored in subsections:[] here
    //
    // Mapped through by Options.js, used in Resume.js
    {
      sectionLabel: 'Section Heading',
      sectionIncludeKey: 'section_heading',
      subsections: ['section_heading'],
    },
    {
      sectionLabel: 'Applicant Name',
      sectionIncludeKey: 'applicant_name',
      subsections: ['applicant_name'],
    },
    {
      sectionLabel: 'Description',
      sectionIncludeKey: 'description',
      subsections: ['description'],
    },
    {
      sectionLabel: 'Experience',
      sectionIncludeKey: 'experiences',
      subsections: [
        'experience_position',
        'experience_organization',
        'experience_date',
        'experience_description',
      ],
    },
    {
      sectionLabel: 'Education',
      sectionIncludeKey: 'educations',
      subsections: [
        'education_degree',
        'education_institution',
        'education_date',
      ],
    },
    {
      sectionLabel: 'Projects',
      sectionIncludeKey: 'projects',
      subsections: ['project_title', 'project_description'],
    },
    {
      sectionLabel: 'Skills',
      sectionIncludeKey: 'skills',
      subsections: ['skill', 'highskill_title', 'highskill_description'],
    },
    {
      sectionLabel: 'Interests',
      sectionIncludeKey: 'interests',
      subsections: ['interest'],
    },
  ],

  // ----------------- Template -----------------
  background_colors: {
    header: '516782',
    exp_edu_pro: 'white',
    ski_int: 'CFD9E4',
  },

  shape_colors: {
    header_line: 'white',
    contact_bar_icons: 'white',

    section_underlines: 'black',
    interest_border: 'black',
  },

  fonts: {
    section_heading: {
      // No heading needed
      family: 'Montserrat',
      size: 14,
      color: 'black',
      bold: false,
      italic: false,
    },
    applicant_name: {
      label: 'Applicant Name',
      family: 'Montserrat',
      size: 30,
      color: 'black',
      // color: 'white',
      bold: false,
      italic: false,
    },
    description: {
      label: 'Description',
      family: 'Tinos',
      size: 12,
      color: 'black',
      // color: 'white',
      bold: false,
      italic: false,
    },
    experience_position: {
      label: 'Experience Position',
      family: 'Montserrat',
      size: 12,
      color: 'black',
      bold: true,
      italic: false,
    },
    experience_organization: {
      label: 'Experience Organization',
      family: 'Tinos',
      size: 14,
      color: 'black',
      bold: false,
      italic: false,
    },
    experience_date: {
      label: 'Experience Date',
      family: 'Tinos',
      size: 14,
      color: 'black',
      bold: false,
      italic: true,
    },
    experience_description: {
      label: 'Experience Description',
      family: 'Tinos',
      size: 14,
      color: 'black',
      bold: false,
      italic: false,
    },
    education_degree: {
      label: 'Education Degree',
      family: 'Tinos',
      size: 14,
      color: 'black',
      bold: true,
      italic: false,
    },
    education_institution: {
      label: 'Education Institution',
      family: 'Tinos',
      size: 14,
      color: 'black',
      bold: false,
      italic: false,
    },
    education_date: {
      label: 'Education Date',
      family: 'Tinos',
      size: 14,
      color: 'black',
      bold: false,
      italic: true,
    },
    project_title: {
      label: 'Project Title',
      family: 'Montserrat',
      size: 12,
      color: 'black',
      italic: false,
      bold: true,
    },
    project_description: {
      label: 'Project Description',
      family: 'Tinos',
      size: 14,
      color: 'black',
      italic: false,
      bold: false,
    },
    skill: {
      label: 'Skill',
      family: 'Tinos',
      size: 14,
      color: 'black',
      bold: false,
      italic: false,
    },
    highskill_title: {
      label: 'Highskill Title',
      family: 'Montserrat',
      size: 12,
      color: 'black',
      bold: true,
      italic: false,
    },
    highskill_description: {
      label: 'Highskill Description',
      family: 'Tinos',
      size: 14,
      color: 'black',
      bold: false,
      italic: false,
    },
    interest: {
      label: 'Interest',
      family: 'Tinos',
      size: 14,
      color: 'black',
      bold: false,
      italic: false,
    },
  },

  // ----------------- Content -----------------

  active_sections: {
    applicant_name: true,
    description: true,
    experiences: true,
    experience_position: true,
    experience_organization: true,
    experience_date: true,
    experience_description: true,
    educations: true,
    education_degree: true,
    education_institution: true,
    education_date: true,
    projects: true,
    project_title: true,
    project_description: true,
    skills: true,
    skill: true,
    highskill_title: true,
    highskill_description: true,
    interests: true,
  },
  applicant_name: 'a0',

  description: 'a1',

  // Write contact bar after implementing
  // 'Add Link' feature to Resume Builder

  experiences: {
    a2: {
      position: 'a2',
      organization: 'a3',
      date: 'a4',
      text: ['a5', 'a6', 'a7'],
    },
    a8: {
      position: 'a8',
      organization: 'a9',
      date: 'b0',
      text: ['b1', 'b2', 'b3'],
    },
    b4: {
      position: 'b4',
      organization: 'b5',
      date: 'b6',
      text: ['b7', 'b8', 'b9'],
    },
    allIds: ['a2', 'a8', 'b4'],
  },

  educations: {
    c0: {
      degree: 'c0',
      institution: 'c1',
      date: 'c2',
    },
    allIds: ['c0'],
  },

  projects: {
    c3: {
      title: 'c3',
      text: ['c4', 'c5', 'c6'],
    },
    c7: {
      title: 'c7',
      text: ['c8', 'c9', 'd0'],
    },
    allIds: ['c3', 'c7'],
  },

  skills: {
    d1: {
      text: 'd1',
      level: 3,
    },
    d2: {
      text: 'd2',
      level: 3,
    },
    d3: {
      text: 'd3',
      level: 3,
    },
    d4: {
      text: 'd4',
      level: 3,
    },
    d5: {
      text: 'd5',
      level: 3,
    },
    d6: {
      text: 'd6',
      level: 3,
    },
    allIds: ['d1', 'd2', 'd3', 'd4', 'd5', 'd6'],
  },

  highskills: {
    d7: {
      title: 'd7',
      text: ['d8', 'd9'],
    },
    e0: {
      title: 'e0',
      text: ['e1', 'e2'],
    },
    e3: {
      title: 'e3',
      text: ['e4', 'e5'],
    },
    allIds: ['d7', 'e0', 'e3'],
  },

  interests: ['e6', 'e7', 'e8', 'e9'],

  text: {
    a0: 'Sample Name',
    a1: '(Description)   Sample text...',
    a2: 'Job Position 1',
    a3: 'Organization 1',
    a4: '11/1111 - 22/2222',
    a5: '1-1 Sample text is...',
    a6: '1-2 Sample text is...',
    a7: '1-3 Sample text is...',
    a8: 'Job Position 2',
    a9: 'Organization 2',
    b0: '33/3333 - 44/4444',
    b1: '2-1 Sample text is...',
    b2: '2-2 Sample text is...',
    b3: '2-3 Sample text is...',
    b4: 'Job Position 1',
    b5: 'Organization 1',
    b6: '55/5555 - 66/6666',
    b7: '3-1 Sample text is...',
    b8: '3-2 Sample text is...',
    b9: '3-3 Sample text is...',
    c0: 'Bachelor of Sample in Sampling',
    c1: 'University of Sample, City, Province, Country',
    c2: '77/7777 - 88/8888',
    c3: 'Project 1',
    c4: '4-1 Sample text is...',
    c5: '4-2 Sample text is...',
    c6: '4-3 Sample text is...',
    c7: 'Project 2',
    c8: '5-1 Sample text is...',
    c9: '5-2 Sample text is...',
    d0: '5-3 Sample text is...',
    d1: 'Sample skill 1',
    d2: 'Sample skill 2',
    d3: 'Sample skill 3',
    d4: 'Sample skill 4',
    d5: 'Sample skill 5',
    d6: 'Sample skill 6',
    d7: 'Highskill 1',
    d8: '6-1 Sample text is...',
    d9: '6-2 Sample text is...',
    e0: 'Highskill 2',
    e1: '7-1 Sample text is...',
    e2: '7-2 Sample text is...',
    e3: 'Highskill 3',
    e4: '8-1 Sample text is...',
    e5: '8-2 Sample text is...',
    e6: 'Interest 1',
    e7: 'Interest ~~~ 2',
    e8: 'Interest ~~~ 3',
    e9: 'Interest 4',
  },
};
