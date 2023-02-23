import { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);
    const onAddCategory = (newCategory) => {

        if( categories.includes(newCategory) ) return;
        
        setCategories([...categories, newCategory])

    };

  return (
    <>
        <h1>0r4ngeH4t - GifExpertApp</h1>

        <AddCategory 
            onNewCategory={ (value) => onAddCategory(value) } 
        />

        { 
            categories.map( ( category ) => (<GifGrid key={ category } category={ category } />)) 
        }
    </>
  )
}
