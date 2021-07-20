import React from 'react'

function UserCard(item) {
    return (
        <div className='col-xs-12 col-lg-4 col-md-4 col-sm-12'>
            <div className=" mb-4">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">{item.email}</p>
                        <span class="badge rounded-pill bg-primary p-2">{item.job}</span>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserCard
