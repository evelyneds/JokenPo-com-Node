const inquirer = require('inquirer')

const MachineOptions = require('./machine');
const options = require('../data');
const gameby = require('../data/gameby');


class User extends MachineOptions{
    constructor({opt, name, selected}){
        super({opt});
        this._name = name;
        this._selected = selected;
        this._sort = this.sort()
    }

    set name(string){
        this._name = string;
    }
    set selected(string){
        this._selected = string;
    }

    get name(){
        return this._name;
    }

    get selected(){
        return this._selected;
    }

    logic(){
        if(this._selected ==this._sort){
            return `${this._name}, máquina escolheu ${this._sort}.Você escolheu ${this.selected} - Vc empatou`
            }else if(
            (this._selected =='Pedra' && this_sort=='Tesoura')
            (this._selected =='Tesoura' && this_sort=='Papel')
            (this._selected =='Papel' && this_sort=='Pedra')

            ){
                return `${this._name}, máquina escolheu ${this._sort}.Você escolheu ${this.selected} - Vc ganhou`
            }else {
                return `${this._name}, máquina escolheu ${this._sort}.Você escolheu ${this.selected} - Vc perdeu`
            }
        }

        game(){
            console.info(gameby);
            return inquirer.prompt([
                {
                    name: 'name',
                    message: 'Qual seu nome?', 
                    default: 'Jogador'
                },
                {
                    type: 'list',
                    name:'jokenpo',
                    message: 'escolha uma das opções:',
                    choices: options
                }

            ]).then((answer)=> {
                this._name = answer.name;
                this._selected = answer.jokenpo;
                console.info(`${this.logic()}`)
            })
        }
}

module.exports = User;

