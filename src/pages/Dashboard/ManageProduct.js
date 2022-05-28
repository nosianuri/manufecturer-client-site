import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ItemRow from './ItemRow';
import DeleteConfirm from './DeleteConfirm';

const ManageProduct = () => {
    const [deletingItem, setDeletingItem] = useState(null);
    const {data: items, isLoading, refetch} = useQuery('items', () => fetch('http://localhost:5000/item', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res=>res.json()));

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div>
            
            <div>
            <h2 className="text-2xl">Manage Product for admin{items.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map((item, index) => <ItemRow
                                key={item._key}
                                item={item}
                                index={index}
                                refetch={refetch}
                                setDeletingItem={setDeletingItem}
                            ></ItemRow>)
                        }
                    </tbody>
                </table>
            </div>
            {deletingItem && <DeleteConfirm
                deletingItem={deletingItem}
                refetch={refetch}
                setDeletingItem={setDeletingItem}
            ></DeleteConfirm>}
        </div>
        </div>
    );
};

export default ManageProduct;