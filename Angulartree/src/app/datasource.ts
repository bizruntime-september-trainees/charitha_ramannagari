export let sampleData: Object[] = [
    {
      taskID: 1,
      taskName: "Planning",
      startDate: new Date("01-09-2020"),
      endDate: new Date("02-09-2020"),
      progress: 100,
      duration: 5,
      priority: "Normal",
      approved: false,
      subtasks: [
        {
          taskID: 2,
          taskName: "Angular",
          startDate: new Date("01-09-2020"),
          endDate: new Date("01-09-2020"),
          duration: 5,
          progress: 100,
          priority: "Normal",
          approved: false
        },
        {
          taskID: 3,
          taskName: "Angular-tree",
          startDate: new Date("01-09-2020"),
          endDate: new Date("01-09-2020"),
          duration: 5,
          progress: 100,
          priority: "Low",
          approved: true
        },
        {
          taskID: 4,
          taskName: "Angular-material",
          startDate: new Date("01-09-2020"),
          endDate: new Date("01-09-2020"),
          duration: 5,
          progress: 100,
          priority: "Critical",
          approved: false
        },
        {
          taskID: 5,
          taskName: "Angular-state",
          startDate: new Date("01-09-2020"),
          endDate: new Date("01-09-2020"),
          duration: 0,
          progress: 0,
          priority: "Low",
          approved: true
        }
      ]
    },
    {
      taskID: 6,
      taskName: "JavaScript",
      startDate: new Date("01-09-2020"),
      endDate: new Date("01-09-2020"),
      duration: 3,
      progress: 86,
      priority: "High",
      approved: false,
      subtasks: [
        {
          taskID: 7,
          taskName: "OOPS",
          startDate: new Date("01-09-2020"),
          endDate: new Date("01-09-2020"),
          duration: 3,
          progress: 60,
          priority: "Normal",
          approved: false
        },
        {
          taskID: 8,
          taskName: "Jquery",
          startDate: new Date("01-09-2020"),
          endDate: new Date("01-09-2020"),
          duration: 3,
          progress: 100,
          priority: "Critical",
          approved: false
        },
        {
          taskID: 9,
          taskName: "Client-side storage",
          startDate: new Date("01-09-2020"),
          endDate: new Date("01-09-2020"),
          duration: 2,
          progress: 100,
          priority: "Low",
          approved: true
        },
        {
          taskID: 10,
          taskName: "typescript",
          startDate: new Date("01-09-2020"),
          endDate: new Date("01-09-2020"),
          duration: 2,
          progress: 100,
          priority: "High",
          approved: true
        },
        {
          taskID: 11,
          taskName: "Rxjs",
          startDate: new Date("01-09-2020"),
          endDate: new Date("01-09-2020"),
          duration: 0,
          progress: 0,
          priority: "Normal",
          approved: true
        }
      ]
    },
    {
      taskID: 12,
      taskName: "Ajax",
      startDate: new Date("01-09-2020"),
      endDate: new Date("01-09-2020"),
      priority: "Normal",
      approved: false,
      duration: 11,
      progress: 66,
      subtasks: [
        {
          taskID: 13,
          taskName: "Rxjs",
          startDate: new Date("01-09-2020"),
          endDate: new Date("01-09-2020"),
          priority: "High",
          approved: false,
          progress: 50,
          duration: 11,
          subtasks: [
            {
              taskID: 14,
              taskName: "Observable",
              startDate: new Date("01-09-2020"),
              endDate: new Date("01-09-2020"),
              priority: "Normal",
              duration: 11,
              progress: 10,
              approved: false,
              subtasks: [
                {
                  taskID: 15,
                  taskName: "Schedulers",
                  startDate: new Date("01-09-2020"),
                  endDate: new Date("01-09-2020"),
                  duration: 3,
                  progress: "50",
                  priority: "High",
                  approved: false
                },
                {
                  taskID: 16,
                  taskName: "Subjects",
                  startDate: new Date("01-09-2020"),
                  endDate: new Date("01-09-2020"),
                  duration: 3,
                  progress: "50",
                  priority: "Low",
                  approved: true
                },
                {
                  taskID: 17,
                  taskName: "Observer",
                  startDate: new Date("01-09-2020"),
                  endDate: new Date("01-09-2020"),
                  duration: 2,
                  progress: "0",
                  priority: "Normal",
                  approved: true
                },
                {
                  taskID: 18,
                  taskName: "Operators",
                  startDate: new Date("01-09-2020"),
                  endDate: new Date("01-09-2020"),
                  duration: 2,
                  progress: "0",
                  priority: "Critical",
                  approved: false
                },
                {
                  taskID: 19,
                  taskName: "Subscription",
                  startDate: new Date("01-09-2020"),
                  endDate: new Date("01-09-2020"),
                  duration: 2,
                  progress: "0",
                  priority: "High",
                  approved: false
                },
                {
                  taskID: 20,
                  taskName: "summary",
                  startDate: new Date("01-09-2020"),
                  endDate: new Date("01-09-2020"),
                  duration: 0,
                  progress: "50",
                  priority: "Low",
                  approved: true
                }
              ]
            }
          ]
        }
      
     
      ]
    }
  ];