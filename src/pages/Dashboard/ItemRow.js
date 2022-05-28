import React from 'react';
import { toast } from 'react-toastify';

const ItemRow = ({item, index, refetch}) => {
    const {name, quantity, img, email} = item;

    const handleDelete = email =>{
        fetch(`http://localhost:5000/item/${email}`,{
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>res.json())
        .then(data =>{
            console.log(data);
            if(data.deletedCount){
                toast.success(`item: ${name} is deleted.`)
                refetch();
            }
        })
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td><div class="avatar">
                <div class="w-8 rounded">
                    <img src={img} alt={name} />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{quantity}</td>
            <td>
            <label onClick={() => handleDelete(email)} for="delete-confirm-modal" class="btn btn-xs btn-error">Delete</label>            
            </td>
        </tr>
    );
};

export default ItemRow;