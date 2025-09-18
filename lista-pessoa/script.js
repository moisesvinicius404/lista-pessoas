class ListaPessoas {

  constructor() {
    this.input = document.getElementById('nome')
    this.btn = document.getElementById('adicionar')
    this.listaPessoas = document.getElementById('lista')

    this.inicializar()
    this.marcarNome()
  }

  inicializar() {
    this.btn.addEventListener('click', () => {

        const nome = this.input.value.trim()
        if (nome === '') {
            alert('Ops, antes de enviar você precisa inserir algum nome')
        }else {
            let li = document.createElement('LI')

            li.style.cursor = 'pointer'

            li.innerText = nome
            this.listaPessoas.appendChild(li)

            // Limpar campo
            this.input.value = ''

        }
    })
  }

    marcarNome() {
        this.listaPessoas.addEventListener('click', (e) => {
            if (e.target.tagName === 'LI') {
                e.target.classList.toggle('concluido')
            }
        })
    }

}

const pessoas = new ListaPessoas()
