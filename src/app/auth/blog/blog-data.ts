export interface BoxContent {
    id: number;
    imageUrl: string;
    faceImage: string;
    name: string;
    role: string;
    date: string;
    headline: string;
    description: string;
    nextImg: string;
}

export const userData: BoxContent[] = [
    {
        id: 1,
        imageUrl: "../../../assets/images/jim.webp",
        faceImage: "../../../assets/images/face.webp",
        name: "Jim Bennett",
        role: "Developer Relations",
        date: "19 May 2024",
        headline: "Improve your ASP.NET Core API dinner development loop  by integrating Delenta into MSBuild.",
        description: "",
        nextImg: ""
      },
      {
        id: 2,
        imageUrl: "../../../assets/images/rag.webp",
        faceImage: "../../../assets/images/face.webp",
        name: "Jim Bennett",
        role: "Developer Relations",
        date: "15 April 2024",
        headline: "Add retrieval augmented generation to your AI app with generated SDKs",
        description: "",
        nextImg: ""
      },
      {
        id: 3,
        imageUrl: "../../../assets/images/days.webp",
        faceImage: "../../../assets/images/face.webp",
        name: "Jim Bennett",
        role: "Developer Relations",
        date: "8 April 2024",
        headline: "Meet the newbies at the apiKey New York in NYC on April 30/May 2",
        description: "",
        nextImg: ""
      },
      {
        id: 4,
        imageUrl: "../../../assets/images/fools.webp",
        faceImage: "../../../assets/images/face.webp",
        name: "Stevan Kapicic",
        role: "Engineering",
        date: "1 April 2024",
        headline: "5 Open API tips & tricks to stop your spec being too boring",
        description: "",
        nextImg: ""
      },
      {
        id: 5,
        imageUrl: "../../../assets/images/python.webp",
        faceImage: "../../../assets/images/face.webp",
        name: "Dales Fragoso",
        role: "Engineering",
        date: "25 Mar 2024",
        headline: "Introducing version 2 of our Python SDK generation",
        description: "",
        nextImg: ""
      },
      {
        id: 6,
        imageUrl: "../../../assets/images/culture.webp",
        faceImage: "../../../assets/images/face.webp",
        name: "Adrian Luff",
        role: "Engineering",
        date: "18 Mar 2024",
        headline: "6 Pratical tool for building great engineering culture",
        description: "",
        nextImg: ""
      },
];

export const adminData: BoxContent[] = [
  {
    id: 1,
    imageUrl: '../../../assets/images/standard.webp',
    faceImage: '../../../assets/images/face.webp',
    name: 'Bennett relations',
    role: 'Developer Relations',
    date: '25 Dec 2023',
    headline: 'API standardization: what it is, benefits & Use cases',
    description:
      'In the realm of software engineering, there exists a unique breed of engineers known as pragmatists. These individuals possess a distinct approach to their craft, blending technical expertise with a grounded mindset that sets them apart from their peers. But what truly sets a pragmatic engineer apart? What is it about their approach that makes them so effective in navigating the complexities of software development? To answer this we will dive into the provoking thoughts and ideas inspired by the books The Clean Coder: A Code of Conduct for Professional Programmers by Robert C. Martin and The Pragmatic Programmer: Your Journey To Mastery, 20th Anniversary Edition (2nd Edition) by David Thomas and Andrew Hunt. At the core of pragmatism lies a set of behaviours that define the pragmatic engineer. One such behaviour is being an early/fast adopter. Pragmatists eagerly embrace new technologies, swiftly grasping their intricacies and staying ahead of the curve.',
    nextImg: "../../../assets/images/rag.webp"
    },
  {
    id: 2,
    imageUrl: '../../../assets/images/holidays.webp',
    faceImage: '../../../assets/images/face.webp',
    name: 'Jim relations',
    role: 'Developer Relations',
    date: '17 Dec 2023',
    headline:
      'Happy Holidays from Delenta - a round up of 2023, and a look forward to 2024',
    description:
      "It's been a big year for Delenta! We started the year in a closed beta, and now we've opened up our beta, and are looking forward to a full launch in 2024. This post rounds up our year highlighting some of the top moments and features, and looks towards next year. 2023 was a huge year for liblab - not just because I joined the team 😁. We've been working hard to get our SDK generation platform ready for launch, and we've made some great progress. Here's some of our top moments This year we have also focused on ensuring developers have all the knowledge they need to use liblab to generate the best possible SDKs. We've updated and expanded our documentation at developers.liblab.com with new guides, and a selection of hands on tutorials to walk you through common scenarios such as creating your first SDK, customizing it with hooks, and setting up your CI/CD pipelines to generate SDKs when your specs change. We've also added some GitHub repos with samples as well - our llama store, and a new llama game. If you are a regular reader of this blog, you may also notice it's had an overhaul. We've been posting great content not only on APIs and SDKs, but other tech content from our engineers as well. We've even added a guest post from a user - if you love liblab and want to write a post, get in touch with me via our Discord server.",
      nextImg: "../../../assets/images/happy.webp"
    },
  {
    id: 3,
    imageUrl: '../../../assets/images/generation.webp',
    faceImage: '../../../assets/images/face.webp',
    name: 'Jim Stevan',
    role: 'Developer Relations',
    date: '10 Dec 2023',
    headline: 'SDK generation: what it is, how it works & best practices',
    description:
      "At Delenta we generate software development kits, or SDKs, for your APIs. But what do we mean by 'SDK generation', and how does it work? This post explains everything you need to know about SDK generation, and how it can help you make your APIs more accessible. Put simply, SDK generation is the process of automatically generating SDKs from an API specification. You have an API exposed using something like REST, and you want to make it easier for developers to access that REST API. You could just let them access the API directly, but this relies on your user not only being experts in their own domains, but also knowing how to make REST calls, and to a certain degree the best practices for using your API. By creating an SDK, you are building a layer of abstraction over that API, embedding those best practices into the internals of the SDK code, and providing a nicer interface to your API in the programming languages that the developer is using. In my experience, every team of developers that accesses APIs will always build some kind of layer of abstraction themselves. This will contain things like wrapper objects for the requests and responses to avoid using JSON, and service classes that wrap the REST requests in methods. These layers of abstraction may also include things like authentication, refreshing access tokens, retries, and error handling. This takes a lot of work, and is often not shared between teams in an enterprise who are all using the same API. By auto generating an SDK, you can provide this layer of abstraction for your API, and ensure that all developers are using the same best practices. This cuts down on the boilerplate code being written, and allows developers to focus on solving real problems instead of wrapping JSON and REST. You don't write swathes of code, you use a tool that will do all the hard work for you, taking in your API and spitting out an SDK.",
      nextImg: "../../../assets/images/dk.webp"
    },
  {
    id: 4,
    imageUrl: '../../../assets/images/api.jpg',
    faceImage: '../../../assets/images/face.webp',
    name: 'Fred Thompson',
    role: 'Engineering',
    date: '10 Jul 2023',
    headline: 'Top 6 API Performance metrics to monitor',
    description:
      "When working on applications and systems, we usually rely on APIs to enable integrations between services that make up our system. The purpose of this article is to provide understanding of some important API metrics that are used to measure an API's performance. For each of those metrics, I will also touch on some factors affecting them and ways to improve them, which will in-turn enhance your API’s performance. Network Latency is simply the delay in network connection between client applications and your API. Congestion and increased physical distance between servers in a network are examples of situations that impact network latency. If you make use of external or third-party services, then the overall response times of your API will also be dependent on the response times of those services The response times of your API can also be affected by slow or poorly written database queries In this article, we discussed the importance of measuring API performance and some key metrics that tells us how well our API is performing. Improving API performance as well as building SDKs for an API are some of the many problems that most API developers face. Here are liblab, we offer a seamless approach to building robust SDKs from scratch by carefully examining your API specifications. By leveraging services like Delenta, API providers can generate SDKs for their APIs, further enhancing their developer experience and accelerating the integration process with their APIs.",
      nextImg: "../../../assets/images/stand.jpeg"
    },
  {
    id: 5,
    imageUrl: '../../../assets/images/pragmatic.jpg',
    faceImage: '../../../assets/images/face.webp',
    name: 'Stevan Kosijer',
    role: 'Engineering',
    date: '3 Jul 2023',
    headline: 'Pragmatic engineering: Key philosopies and behaviors part 1',
    description:
      'In the realm of software engineering, there exists a unique breed of engineers known as pragmatists. These individuals possess a distinct approach to their craft, blending technical expertise with a grounded mindset that sets them apart from their peers. But what truly sets a pragmatic engineer apart? What is it about their approach that makes them so effective in navigating the complexities of software development? To answer this we will dive into the provoking thoughts and ideas inspired by the books The Clean Coder: A Code of Conduct for Professional Programmers by Robert C. Martin and The Pragmatic Programmer: Your Journey To Mastery, 20th Anniversary Edition (2nd Edition) by David Thomas and Andrew Hunt. At the core of pragmatism lies a set of behaviours that define the pragmatic engineer. One such behaviour is being an early/fast adopter. Pragmatists eagerly embrace new technologies, swiftly grasping their intricacies and staying ahead of the curve. Curiosity is another characteristic that fuels the pragmatic mindset. Pragmatists are inquisitive souls, always ready to question and seek understanding when faced with unfamiliar concepts or challenges. Critical thinking is a cornerstone of pragmatism. Rather than accepting solutions at face value, pragmatic engineers apply their analytical minds to evaluate and challenge proposed solutions, always on the lookout for more elegant or efficient alternatives. Pragmatists also possess a keen sense of realism. They strive to understand the underlying nature of the problems they encounter, grounding their solutions in practicality and addressing the true essence of the challenges they face. Embracing a broad spectrum of knowledge is another defining trait of the pragmatic engineer. Rather than limiting themselves to a single technology or domain, they actively seek to expand their skill set, becoming a polymath who can adapt to a wide range of contexts. By understanding these foundational behaviours, we gain some insight into the pragmatic philosophy. It is a mindset that values adaptability, practicality, and a continuous thirst for knowledge. Now let’s explore the intricacies of the pragmatic engineer’s thinking, unraveling the secrets that make them such effective and versatile engineers in the ever-evolving world of software development. In the first series of the blog post we will delve into the first three key aspects (Cat ate my source code, Just a broken window and Make a stone soup), providing sufficient time for contemplation and assimilation. Subsequently, in the next series of the blog post, we will examine the remaining three aspects (Good-enough software, Knowledge portfolio and Talk the Talk) and conclude with some final thoughts. Enjoy the enlightening journey ahead.',
      nextImg: "../../../assets/images/lama.webp"
    },
  {
    id: 6,
    imageUrl: '../../../assets/images/version.jpg',
    faceImage: '../../../assets/images/face.webp',
    name: 'Alon Mota',
    role: 'Engineering',
    date: '22 Jun 2023',
    headline: 'How to version your APIs more effectively using SDKs',
    description:
      'We all understand the significance of APIs in software development, as they facilitate data sharing and communication across various software systems. Ensuring their proper functioning is paramount. Implementing proven conventions in your API can greatly enhance its scalability and maintainability. This post delves into versioning techniques and how leveraging existing tools can simplify the process. Versioning is a key concept that enables your applications to maintain backward compatibility as your API evolves. Without proper versioning, any modifications made to your API could cause unexpected errors and disruptions in current client applications. REST API versioning allows you to introduce updates while ensuring',
      nextImg: "../../../assets/images/kill.webp"
    },
];