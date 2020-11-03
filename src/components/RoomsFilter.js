import React from 'react'
import { useContext } from 'react'
import { RoomContext } from '../context'
import Title from '../components/Title'

//get all unique values
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}

export default function RoomsFilter({ rooms }) {
    const context = useContext(RoomContext)
    const {
        handleChange, type, capacity, maxPrice, minPrice, price, minSize, maxSize, breakfast, pets
    } = context
    // get unique types
    let types = getUnique(rooms, 'type')
    //add all
    types = ['all', ...types]
    // get unique capacities 
    let capacities = getUnique(rooms, 'capacity')
    // add all capacities
    capacities = ['any', ...capacities]
    return (
        <section className='filter-container' >
            <Title title='search rooms' ></Title>
            <form action="" className='filter-form' >
                {/* select type */}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select name="type" id="type" value={type} className='form-control' onChange={handleChange} >
                        {
                            types.map((type, index) => {
                                return <option value={type} key={index}>{type}</option>
                            })
                        }
                    </select>
                </div>
                {/* end select type */}
                {/* guests */}
                <div className="form-group">
                    <label htmlFor="capacity">guests</label>
                    <select name="capacity" id="capacity" value={capacity} className='form-control' onChange={handleChange} >
                        {
                            capacities.map((capacity, index) => {
                                return <option value={capacity} key={index}>{capacity}</option>
                            })
                        }
                    </select>
                </div>
                {/* end guests */}
                {/* room price */}
                <div className="form-group">
                    <label htmlFor="price">
                        room price ${price}
                    </label>
                    <input type="range" name='price' min={minPrice} max={maxPrice} id='price' value={price} onChange={handleChange} step={10} className='form-control' />
                </div>
                {/* end room price */}
                {/* size */}
                <div className="form-group">
                    <label htmlFor="size">room size</label>
                    <div className="size-inputs">
                        <input type="number" name='minSize' id='size' value={minSize} onChange={handleChange} className='size-input' step='50' />
                    </div>
                    <div className="size-inputs">
                        <input type="number" name='maxSize' id='size' value={maxSize} onChange={handleChange} className='size-input' step='50' />
                    </div>
                </div>
                {/* end size */}
                {/* extras */}
                <div className="from-group">
                    <div className="single-extra">
                        <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange} />
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange} />
                        <label htmlFor="pets">pets</label>
                    </div>
                </div>
                {/* end extras */}
            </form>
        </section>
    )
}
