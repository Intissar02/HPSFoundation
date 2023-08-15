import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  newsList = [
    {
      title: 'Breaking News: Medical Breakthrough',
      content: `In a recent development, scientists have made a significant medical breakthrough that has the potential to revolutionize healthcare. Researchers have discovered a new treatment method that shows promising results in combating previously incurable diseases. This breakthrough is a result of years of dedicated research and collaboration among experts.`,
      imageUrl: 'assets/caravane-medicale-504x300.jpg',
      date: new Date('07/15/2023')
    },
    {
      title: 'Local Community Initiative: Planting Trees for a Greener Tomorrow',
      content: `Community members came together to participate in a tree-planting event aimed at enhancing the environment and promoting sustainability. The initiative, organized by local volunteers and environmental organizations, planted hundreds of trees in urban areas. The effort not only contributes to a greener landscape but also raises awareness about the importance of preserving nature.`,
      imageUrl: 'assets/mentoring-HEADER.jpg',
      date: new Date('08/05/2023')
    },
    {
      title: 'Global Education Summit: Empowering Students Worldwide',
      content: `Leaders and educators from around the world convened at the Global Education Summit to discuss strategies for empowering students through quality education. The summit focused on bridging educational gaps, leveraging technology for learning, and fostering inclusive educational environments. Participants engaged in insightful discussions and shared best practices.`,
      imageUrl: 'assets/test.jpg',
      date: new Date('09/20/2023')
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
