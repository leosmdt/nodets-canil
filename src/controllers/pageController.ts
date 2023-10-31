import { Request, Response} from 'express'; 
import { createMenuObject } from '../helpers/createMenuObject'
import { pet } from './models/pet'

const imagesPath = "../../images/"
export const home = (req: Request, res: Response) => {
   let list = pet.getAll(); 

    res.render('pages/page', {
    menu: createMenuObject('all'),
    banner: {
    title: 'Todos os animais',
    background: imagesPath + 'allanimals.jpg'
    },
    list

   });
}

export const dogs = (req: Request, res: Response) => {
  let list = pet.getFromType('dog')
    res.render('pages/page', {
    menu: createMenuObject('dog'),
    banner: {
    title: 'Cachorros',
    background: imagesPath + 'banner_dog.jpg'},
    list
    });
}
export const cats = (req: Request, res: Response) => {
  let list = pet.getFromType('cat')
  res.render('pages/page', {
    menu: createMenuObject('cat'),
    banner: {
    title: 'Gatos',
    background: imagesPath + 'banner_cat.jpg'},
    list
    });
}
export const fishes = (req: Request, res: Response) => {
  let list = pet.getFromType('fish')

  res.render('pages/page', {
    menu: createMenuObject('all'),
    banner: {
    title: 'Peixes',
    background: imagesPath + 'banner_fish.jpg'}, 
    list
    });
}