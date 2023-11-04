const skills = [
    { name: 'Skill A', percent: 80 },
    { name: 'Skill B', percent: 70 },
    { name: 'Skill C', percent: 60 },
    { name: 'Skill D', percent: 90 },
    // Add more skills with their percentages
  ];
  
  function animateSkills() {
    skills.forEach((skill, index) => {
      const skillBar = document.getElementById(`skillBar${String.fromCharCode(65 + index)}`);
      const increment = skill.percent / 100;
      let currentWidth = 0;
  
      const updateWidth = () => {
        if (currentWidth < increment) {
          currentWidth += 0.01; // Adjust the increment speed
          skillBar.style.width = (currentWidth * 70) + '%';
          requestAnimationFrame(updateWidth);
        }
      };
  
      updateWidth();
    });
  }
  
  animateSkills();
  