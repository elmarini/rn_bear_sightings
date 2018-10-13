const data = [
  {
    quantity: 1,
    type: 'lifesaver',
    notes: 'Dave is truly a life saver. Reliable & convenient.',
    zip: 90033
  },
  {
    quantity: 1,
    type: 'racer',
    notes: 'Fast and easy love him',
    zip: 90045
  },
  {
    quantity: 1,
    type: 'reporter',
    notes: 'Saves my butt with updates about my balance.',
    distance: 90044
  },
  {
    quantity: 1,
    type: 'buddy',
    notes: 'No more borrowing from friends.',
    distance: 90049
  },
]

export default {
  get: () => data,
  post: (dave) => {
    data.push(dave)
    return data
  },
  search: (zip) => {
    return data.filter(entry => {
      return Math.abs(entry.zip - zip) <= 10
    })
  }
}
