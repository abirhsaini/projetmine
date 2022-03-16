import React from 'react';
import "../style/tout.scss"


const Chef = () => {
    return (
        <div>
            <div class="p-3 mb-2 bg-dark text-white" >
                <div class="row">
                    <div class="col-sm" >
                        <img width="200px" height="300px" className='imagechef' src={require("../assets/image/chef1.jpg")} alt="" />
                        <p> chef 1 </p>
                        <p>Lorem ipsum dolor sit amet, conse cteturad ipi scing elit. Suspen disse vitae ligula qui Lorem ipsum dolor sit amet, conse cteturad ipi scing elit. Suspen disse vitae ligula quis.</p>
                    </div>
                    <div class="col-sm" >
                        <img width="200px" height="300px" className='imagechef' src={require("../assets/image/chef2.jpg")} alt="" />
                        <p> chef 2</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum lectus ut ligula fringilla, eu euismod turpis pulvinar. Vestibulum eget urna ac dolor consequat aliquam.</p>
                    </div>
                    <div class="col-sm">
                        <img width="200px" height="300px" className='imagechef' src={require("../assets/image/chef.jpg.crdownload")} alt="" />
                        <p>chef 3</p>
                        <p>Lorem ipsum dolor sit amet, conse cteturad ipi scing elit. Suspen disse vitae ligula quis.
                            Fresh Food
                            Lorem ipsum dolor sit amet, conse cteturad ipi scing elit. Suspen disse vitae ligula quis.</p>
                    </div>
                    <div class="col-sm">
                        <img width="200px" height="300px" className='imagechef' src={require("../assets/image/chef4.jpg")} alt="" />
                        <p>chef 3</p>
                        <p>Lorem ipsum dolor sit amet, conse cteturad ipi scing elit. Suspen disse vitae ligula quis. Lorem ipsum dolor sit amet, conse cteturad ipi scing elit. Suspen disse vitae ligula quis.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Chef;