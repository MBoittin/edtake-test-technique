const resources = [
    { name: 'Nancy', color: '#ffaa00' },
    { name: 'Steven', color: '#f8a398' },
    { name: 'Michael', color: '#7499e1' }
]
  
const events = [{
    Id: 1,
    Subject: 'Task 1',
    StartTime: new Date(2021, 8, 29, 15, 30),
    EndTime: new Date(2021, 8, 29, 16, 0),
    IsAllDay: false,
    Location: 'London',
    ResourceId: 1
}, {
    Id: 2,
    Subject: 'Task 2',
    StartTime: new Date(2021, 8, 29, 16, 30),
    EndTime: new Date(2021, 8, 29, 17, 30),
    ResourceId: 2
    }]

export {resources, events}