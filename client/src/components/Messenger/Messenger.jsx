import React from 'react'
import {Link} from 'react-router-dom'

import './Messenger.css'

const Messenger = ()=> {

    return(
        <div className='messenger'>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <div className="col-md-12">
                            <Link className="messenger__card-link" to="/messenger">
                                <div class="card messenger__card">
                                    <div class="card-body messenger__card-body">
                                        <h5 class="card-title messenger__card-user">Андрей Чистяков <span className="messenger__card-user_status">онлайн</span></h5>
                                        <p class="card-text messenger__card-message">АУЕ! Дарова ебаный рот, я присоединился к этой социальной сети</p>                           
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Messenger