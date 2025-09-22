const courses = [

  // INFORMATION TECHNOLOGY
  { course_code: "BHS-100", course_name: "BHS-100 CONSTITUTION OF INDIA" ,course_branch:"IT",course_year:"3rd",course_college:"COT"},
  { course_code: "BHS-186", course_name: "BHS-186 ENGLISH" ,course_branch:"IT",course_year:"1st" ,course_college:"COT"},
  { course_code: "BHS-188", course_name: "BHS-188 INDUSTRIAL SOCIOLOGY" ,course_branch:"IT",course_year:"1st",  course_college:"COT" },
  { course_code: "BHS-286", course_name: "BHS-286 EFFECTIVE TECHNICAL COMMUNICATION",course_branch:"IT",course_year:"1st",  course_college:"COT" },
  { course_code: "BPC-102", course_name: "BPC-102 CHEMISTRY-I" ,course_branch:"IT",course_year:"1st", course_college:"COT" },
  { course_code: "BPM-143", course_name: "BPM-143 CALCULUS AND LINEAR ALGEBRA" ,course_branch:"IT",course_year:"1st",course_college:"COT" },
  { course_code: "BPM-154", course_name: "BPM-154 MULTIVARIABLE CALCULUS, TRANSFORMS & ORDINARY DIFFERENTIAL EQUATIONS" ,course_branch:"IT",course_year:"1st",course_college:"COT" },
  { course_code: "BPP-151", course_name: "BPP-151 PHYSICS WAVES AND OPTICS AND INTRODUCTION TO QUANTUM MECHANICS",course_branch:"IT",course_year:"1st",course_college:"COT" },
  { course_code: "BPS-228", course_name: "BPS-228 PROBABILITY AND STATISTICS",course_branch:"IT",course_year:"2nd", course_college:"COT" },
  { course_code: "TCE-114", course_name: "TCE-114 ENGINEERING GRAPHICS & DESIGN" ,course_branch:"IT",course_year:"1st",course_college:"COT"},
  { course_code: "TEC-301", course_name: "TEC-301 ANALOG ELECTRONIC CIRCUITS" ,course_branch:"IT",course_year:"2nd",course_college:"COT"},
  { course_code: "TEE-104", course_name: "TEE-104 BASIC ELECTRICAL ENGINEERING",course_branch:"IT",course_year:"1st",course_college:"COT" },
  { course_code: "TIP-103", course_name: "TIP-103 WORKSHOP PRACTICES" ,course_branch:"IT",course_year:"1st",course_college:"COT"},
  { course_code: "TIT-121", course_name: "TIT-121 PROGRAMMING FOR PROBLEM SOLVING",course_branch:"IT",course_year:"1st",course_college:"COT" },
  { course_code: "TIT-233", course_name: "TIT-233 DATA STRUCTURES" ,course_branch:"IT",course_year:"2nd",course_college:"COT"},
  { course_code: "TIT-234", course_name: "TIT-234 FOUNDATIONS OF INFORMATION TECHNOLOGY" ,course_branch:"IT",course_year:"1st",course_college:"COT"},
  { course_code: "TIT-235", course_name: "TIT-235 FORMAL LANGUAGE & AUTOMATA THEORY" ,course_branch:"IT",course_year:"2nd",course_college:"COT"},
  { course_code: "TIT-241", course_name: "TIT-241 DISCRETE MATHEMATICS" ,course_branch:"IT",course_year:"2nd",course_college:"COT"},
  { course_code: "TIT-242", course_name: "TIT-242 COMPUTER ORGANIZATION" ,course_branch:"IT",course_year:"2nd",course_college:"COT"},
  { course_code: "TIT-243", course_name: "TIT-243 OPERATING SYSTEMS",course_branch:"IT",course_year:"2nd",course_college:"COT" },
  { course_code: "TIT-244", course_name: "TIT-244 OBJECT ORIENTED PROGRAMMING" ,course_branch:"IT",course_year:"2nd",course_college:"COT"},
  { course_code: "TIT-351", course_name: "TIT-351 DATABASE MANAGEMENT SYSTEMS" ,course_branch:"IT",course_year:"3rd",course_college:"COT"},
  { course_code: "TIT-352", course_name: "TIT-352 JAVA PROGRAMMING",course_branch:"IT",course_year:"3rd",course_college:"COT" },
  { course_code: "TIT-353", course_name: "TIT-353 DESIGN & ANALYSIS OF ALGORITHMS",course_branch:"IT",course_year:"3rd",course_college:"COT" },
  { course_code: "TIT-362", course_name: "TIT-362 E-COMMERCE",course_branch:"IT",course_year:"3rd",course_college:"COT" },
  { course_code: "TIT-363", course_name: "TIT-363 MODERN TRENDS IN INFORMATION TECHNOLOGY",course_branch:"IT",course_year:"3rd",course_college:"COT" },
  { course_code: "TIT-364", course_name: "TIT-364 COMPUTER NETWORKS",course_branch:"IT",course_year:"3rd",course_college:"COT" },
  { course_code: "TIT-365", course_name: "TIT-365 WEB AND INTERNET TECHNOLOGY" ,course_branch:"IT",course_year:"3rd",course_college:"COT"},
  { course_code: "TIT-483", course_name: "TIT-483 COMPUTER SYSTEM SECURITY" },
  { course_code: "TIT-484", course_name: "TIT-484 IT WORKSHOP" },
  { course_code: "TIT-486", course_name: "TIT-486 OPEN SOURCE SYSTEMS" },
  { course_code: "TIT-492", course_name: "TIT-492 SEMINAR" },
  { course_code: "TIT-495A", course_name: "TIT-495A PROJECT-I" },
  { course_code: "TIT-495B", course_name: "TIT-495B PROJECT-II" },
  { course_code: "TME-109", course_name: "TID/TSW/TCE/TME-109 INTRODUCTION TO ENVIRONMENTAL ENGINEERING AND DISASTER MANAGEMENT" },



  // MECHANICAL ENGINEERING

  // 1st Year - Semester I
  { course_code: "TIT-121", course_name: "Programming for Problem Solving", course_branch: "ME", course_year: "1st", course_sem: "I", course_college: "COT" },
  { course_code: "BPM-143", course_name: "Calculus & Linear Algebra", course_branch: "ME", course_year: "1st", course_sem: "I", course_college: "COT" },
  { course_code: "TEE-104", course_name: "Basic Electrical Engineering", course_branch: "ME", course_year: "1st", course_sem: "I", course_college: "COT" },
  { course_code: "BPC-102", course_name: "Chemistry I", course_branch: "ME", course_year: "1st", course_sem: "I", course_college: "COT" },
  { course_code: "TSW-109", course_name: "Int. Environmental Engg. & Disaster Management", course_branch: "ME", course_year: "1st", course_sem: "I", course_college: "COT" },

  // 1st Year - Semester II
  { course_code: "BPM-153", course_name: "Calculus ODE & Complex Variables", course_branch: "ME", course_year: "1st", course_sem: "II", course_college: "COT" },
  { course_code: "TIP-103", course_name: "Workshop Practices", course_branch: "ME", course_year: "1st", course_sem: "II", course_college: "COT" },
  { course_code: "TCE-114", course_name: "Engineering Graphics & Design", course_branch: "ME", course_year: "1st", course_sem: "II", course_college: "COT" },
  { course_code: "BHS-186", course_name: "English", course_branch: "ME", course_year: "1st", course_sem: "II", course_college: "COT" },
  { course_code: "BPP-199", course_name: "Mechanics", course_branch: "ME", course_year: "1st", course_sem: "II", course_college: "COT" },
  { course_code: "BHS-188", course_name: "Industrial Sociology", course_branch: "ME", course_year: "1st", course_sem: "II", course_college: "COT" },

  // 2nd Year - Semester III
  { course_code: "BPP-201", course_name: "Oscillations, Waves and Optics", course_branch: "ME", course_year: "2nd", course_sem: "III", course_college: "COT" },
  { course_code: "BPM-242", course_name: "PDE, Probability & Statistics", course_branch: "ME", course_year: "2nd", course_sem: "III", course_college: "COT" },
  { course_code: "TEC-227", course_name: "Basic Electronics Engineering", course_branch: "ME", course_year: "2nd", course_sem: "III", course_college: "COT" },
  { course_code: "TME-201", course_name: "Engineering Mechanics", course_branch: "ME", course_year: "2nd", course_sem: "III", course_college: "COT" },
  { course_code: "TME-255", course_name: "Material Science & Engineering", course_branch: "ME", course_year: "2nd", course_sem: "III", course_college: "COT" },
  { course_code: "NSS-201/NCC-201", course_name: "NSS / NCC", course_branch: "ME", course_year: "2nd", course_sem: "III", course_college: "COT" },

  // 2nd Year - Semester IV
  { course_code: "TME-210", course_name: "Fluid Mechanics", course_branch: "ME", course_year: "2nd", course_sem: "IV", course_college: "COT" },
  { course_code: "TIP-206", course_name: "Manufacturing Science-I", course_branch: "ME", course_year: "2nd", course_sem: "IV", course_college: "COT" },
  { course_code: "TME-224", course_name: "Numerical Techniques for Mechanical Engineers", course_branch: "ME", course_year: "2nd", course_sem: "IV", course_college: "COT" },
  { course_code: "TME-216", course_name: "Mechanics of Solids", course_branch: "ME", course_year: "2nd", course_sem: "IV", course_college: "COT" },
  { course_code: "TME-218", course_name: "Engineering Thermodynamics", course_branch: "ME", course_year: "2nd", course_sem: "IV", course_college: "COT" },
  { course_code: "TME-206", course_name: "Instrumentation & Control", course_branch: "ME", course_year: "2nd", course_sem: "IV", course_college: "COT" },
  { course_code: "TME-214", course_name: "Machine Drawing", course_branch: "ME", course_year: "2nd", course_sem: "IV", course_college: "COT" },
  { course_code: "TME-291", course_name: "Practical Training II", course_branch: "ME", course_year: "2nd", course_sem: "IV", course_college: "COT" },
  { course_code: "NSS-202/NCC-202", course_name: "NSS / NCC", course_branch: "ME", course_year: "2nd", course_sem: "IV", course_college: "COT" },

  // 3rd Year - Semester V
  { course_code: "TME-325", course_name: "Heat Transfer", course_branch: "ME", course_year: "3rd", course_sem: "V", course_college: "COT" },
  { course_code: "TME-319", course_name: "Internal Combustion Engines", course_branch: "ME", course_year: "3rd", course_sem: "V", course_college: "COT" },
  { course_code: "TME-322", course_name: "Kinematics of Machines", course_branch: "ME", course_year: "3rd", course_sem: "V", course_college: "COT" },
  { course_code: "TIP-308", course_name: "Manufacturing Technology", course_branch: "ME", course_year: "3rd", course_sem: "V", course_college: "COT" },
  { course_code: "TME-Elective I", course_name: "Programme Elective I", course_branch: "ME", course_year: "3rd", course_sem: "V", course_college: "COT" },
  { course_code: "Open Elective I", course_name: "Open Elective I", course_branch: "ME", course_year: "3rd", course_sem: "V", course_college: "COT" },
  { course_code: "NSS-301/NCC-301", course_name: "NSS / NCC", course_branch: "ME", course_year: "3rd", course_sem: "V", course_college: "COT" },

  // 3rd Year - Semester VI
  { course_code: "TME-323", course_name: "Theory of Machines", course_branch: "ME", course_year: "3rd", course_sem: "VI", course_college: "COT" },
  { course_code: "TME-318", course_name: "Design of Machine Elements", course_branch: "ME", course_year: "3rd", course_sem: "VI", course_college: "COT" },
  { course_code: "TME-303", course_name: "Refrigeration and Air Conditioning", course_branch: "ME", course_year: "3rd", course_sem: "VI", course_college: "COT" },
  { course_code: "TIP-359", course_name: "Managerial Economics", course_branch: "ME", course_year: "3rd", course_sem: "VI", course_college: "COT" },
  { course_code: "TME-Elective II", course_name: "Programme Elective II", course_branch: "ME", course_year: "3rd", course_sem: "VI", course_college: "COT" },
  { course_code: "Open Elective II", course_name: "Open Elective II", course_branch: "ME", course_year: "3rd", course_sem: "VI", course_college: "COT" },
  { course_code: "NSS-302/NCC-302", course_name: "NSS / NCC", course_branch: "ME", course_year: "3rd", course_sem: "VI", course_college: "COT" },
  { course_code: "TME-391", course_name: "Practical Training III", course_branch: "ME", course_year: "3rd", course_sem: "VI", course_college: "COT" },

  // 4th Year - Semester VII
  { course_code: "TME-424", course_name: "Fluid Machinery & Systems", course_branch: "ME", course_year: "4th", course_sem: "VII", course_college: "COT" },
  { course_code: "TME-416", course_name: "Advanced Solid Mechanics", course_branch: "ME", course_year: "4th", course_sem: "VII", course_college: "COT" },
  { course_code: "TME-Elective III", course_name: "Programme Elective III", course_branch: "ME", course_year: "4th", course_sem: "VII", course_college: "COT" },
  { course_code: "TME-Elective IV", course_name: "Programme Elective IV", course_branch: "ME", course_year: "4th", course_sem: "VII", course_college: "COT" },
  { course_code: "Open Elective III", course_name: "Open Elective III", course_branch: "ME", course_year: "4th", course_sem: "VII", course_college: "COT" },
  { course_code: "TME-495A", course_name: "Project I", course_branch: "ME", course_year: "4th", course_sem: "VII", course_college: "COT" },

  // 4th Year - Semester VIII
  { course_code: "TME-Elective V", course_name: "Programme Elective V", course_branch: "ME", course_year: "4th", course_sem: "VIII", course_college: "COT" },
  { course_code: "TME-Elective VI", course_name: "Programme Elective VI", course_branch: "ME", course_year: "4th", course_sem: "VIII", course_college: "COT" },
  { course_code: "Open Elective IV", course_name: "Open Elective IV", course_branch: "ME", course_year: "4th", course_sem: "VIII", course_college: "COT" },
  { course_code: "TME-495B", course_name: "Project II", course_branch: "ME", course_year: "4th", course_sem: "VIII", course_college: "COT" },

];

export default courses