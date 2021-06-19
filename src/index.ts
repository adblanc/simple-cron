class Recurrence {
  value: number

  constructor(value: number) {
    this.value = value
  }

  seconds = () => `*/${this.value} * * * * *` 

  minutes = () => `*/${this.value} * * * *` 

  hours = () => `* */${this.value} * * *`

  days = () => `* * */${this.value} * *` 

  months = () => `* * * */${this.value} *` 

  years = () => `* * * * */${this.value}`
}


export const every = (value: number) => new Recurrence(value)

