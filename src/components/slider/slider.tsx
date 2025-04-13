"use client";

import { AnimatedTestimonials } from "./animated-testimonials";

export function Slider() {
  const testimonials = [
    {
      name: "Task Management System",
      quote: "A web app to efficiently organize, prioritize, and track your daily tasks with a user-friendly interface.",
      redirect: "https://github.com/madhu-1408/Task-Management-System",
      pic: "https://www.sweetprocess.com/wp-content/uploads/2022/10/task-management-30-1.png",
    },
    {
      name: "Amazon Prime Video Clone",
      quote: "A feature-rich clone of Amazon Prime Video showcasing UI/UX design skills with responsive layout and video previews.",
      redirect: "https://github.com/madhu-1408/Amazon-Prime-Video-Clone",
      pic: "https://assets.aboutamazon.com/2d/49/abd3719b41aea4605bb51e4d8d72/subs-pre-order-consent-background-image-cb578173463.jpg",
    },
    {
      name: "Hotel Management System",
      quote: "A comprehensive hotel booking system that Implemented efficient CRUD functionalities for room allocation and booking updates.",
      redirect: "https://github.com/madhu-1408/Hotel-Management-System",
      pic: "https://5.imimg.com/data5/SELLER/Default/2023/3/IC/VN/MV/102623169/hotel-management-system-250x250.jpg",
    },
    {
      name: "Amazon Product Review Analysis",
      quote: "A sentiment analysis project using machine learning to evaluate customer feedback on Amazon product reviews.",
      redirect: "https://github.com/madhu-1408/Sentiment-Analysis.git",
      pic: "https://www.jumpfly.com/wp-content/uploads/2019/12/20200108-Feedback-vs-Reviews-400-1.jpg",
    },
    {
      name: "Red Blue Nim",
      quote: "An interactive take on the classic Nim game built using logic programming and game theory concepts.",
      redirect: "https://github.com/madhu-1408/Red-Blue-Nim.git",
      pic: "https://images.tpointtech.com/tutorial/ai/images/alpha-beta-pruning-step3.png",
    },
    {
      name: "Expense 8 Puzzle Solver",
      quote: "An AI-powered solution to the classic 8-puzzle problem, using search algorithms to find the optimal solution.",
      redirect: "https://github.com/madhu-1408/Expense-8-Puzzle.git",
      pic: "https://miro.medium.com/v2/resize:fit:819/1*Bz0qSCPmRb509DRYpYEEkQ.jpeg",
    },
    {
      name: "Minimum Spanning Tree",
      quote: "A graph algorithm project demonstrating Kruskal’s and Prim’s algorithms to compute the minimum spanning tree.",
      redirect: "https://github.com/madhu-1408/Minimum-Spanning-Tree.git",
      pic: "https://www.mauriciopoppe.com/images/minimum-spanning-tree.png",
    },
    {
      name: "Job Hunt Website",
      quote: "A job listing portal with user authentication and dynamic listings for applicants and recruiters.",
      redirect: "https://github.com/madhu-1408/JobHunt.git",
      pic: "https://media.licdn.com/dms/image/v2/C5112AQGvBgd0eWhhvQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1576308964021?e=2147483647&v=beta&t=P6_wmzlzrMByW7_kb3pI8FyIm9N9tK7zMZVtznKUVXw",
    },
    {
      name: "Payment Gateway Integration",
      quote: "A demo project integrating a secure payment gateway for donations or purchases using Razorpay.",
      redirect: "https://github.com/madhu-1408/payment_gateway_integration.git",
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRArsvyBnLxKh7O-6nCaPNOSqEzCp1TtlHSBCQXRZJ6wfmJ2d0mLEcJ8jUH6W67-GxtcW8&usqp=CAU",
    },
    
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
