export class Pokemon {

  constructor(data) {
    this.id = data.id || ''
    this.name = data.name || ''
    this.url = data.url || ''
  }


  get Template() {
    return `
    <div class="w-75 bg-white elevation-1 p-3 d-flex flex-column">
      <div class="text-center">
        <h3>${this.name}</h3>
      </div>
      <div class="d-flex justify-content-between justify-self-end mt-auto">
        <div>
        ${this.Checkbox}
        </div>
        ${this.Button}
      </div>
    </div>
  `
  }

}