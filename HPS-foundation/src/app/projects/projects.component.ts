import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projectsList = [
    {
      title: 'Project 1',
      content: `Past Project: Medication Assistance Program
      In our past project, we initiated a Medication Assistance Program aimed at providing essential medical supplies and medicines to underserved communities. Through partnerships with local health organizations, we were able to distribute medications to remote villages, ensuring access to healthcare for those in need. This project addressed the pressing issue of limited medical resources in rural areas, contributing to improved well-being and healthier lives.`,
      imageUrl: 'assets/caravane-medicale-504x300.jpg',
      date: new Date('01/01/2022')
    },
    {
      title: 'Project 2',
      content: `Current Project: Mentorship for Teaching Enhancement
      Our ongoing initiative focuses on enhancing the quality of education by offering mentorship to teachers in public schools. By collaborating with experienced educators and educational experts, we empower teachers with innovative teaching methodologies and resources. This project recognizes the crucial role teachers play in shaping future generations and strives to create a more engaging and effective learning environment.`,
      imageUrl: 'assets/mentoring-HEADER.jpg',
      date: new Date('08/01/2023')
    },
    {
      title: 'Project 3',
      content: `Future Project: Empowering Students Through Scholarships
      Our upcoming project aims to provide educational scholarships to deserving students from disadvantaged backgrounds. By offering financial support, we intend to break down barriers to education and empower talented students to pursue their academic aspirations. This project aligns with our mission to foster equal educational opportunities, leading to a brighter future for both students and the nation.`,
      imageUrl: 'assets/test.jpg',
      date: new Date('12/01/2023')
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
