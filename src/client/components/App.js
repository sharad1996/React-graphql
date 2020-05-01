import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import {
  getCategoryQuery,
  getCategoriesQuery,
  getProductQuery,
  getProductsQuery,
} from '../queries/queries';
import './style.css';

let count;
let products;
let categories;
class App extends Component {

  countProductsByCategory(category, products) {
    return products.filter(p => p.category_id === category._id).length
  }

  render() {
    if (!this.props.getProductsQuery.loading) {
      products = this.props.getProductsQuery.products;
    }
    if (!this.props.getCategoriesQuery.loading) {
      categories = this.props.getCategoriesQuery.categories;
    }
    return (
      <div className="container-fluid">
      <div className="row main-header">
    		<div className="col-md-6">
    			<nav className="navbar navbar-default navbar-fixed-top px-0">
    				<div className="input-group advance-search">
    				   <div className="input-group-prepend">
    				     <span className="input-group-text"><i className="fa fa-search"></i></span>
    				   </div>
    				   <input type="text" className="form-control" placeholder="Search" aria-label="Amount (to the nearest dollar)"/>
    				   <div className="input-group-append">
    				     <span className="input-group-text"><a className="text-dark" href="javascript:void(0)"><i className="fa fa-ellipsis-h"></i></a></span>
    				   </div>
    				</div>
    		    </nav>
    		</div>
    		<div className="col-md-6">
    			<ul className="right-navigation float-right my-3">
    				<li className="d-inline-block">
    					<a href="javascript:void(0)" className="p-3"><i className="fa fa-camera text-success" aria-hidden="true"></i></a>
    				</li>
    				<li className="d-inline-block">
    					<a href="javascript:void(0)" className="p-3"><i className="fa fa-tag text-warning" aria-hidden="true"></i></a>
    				</li>
    				<li className="d-inline-block">
    					<a href="javascript:void(0)" className="p-3"><i className="fa fa-bell text-danger" aria-hidden="true"></i></a>
    				</li>
    				<li className="d-inline-block">
    					<a href="javascript:void(0)" className="p-3"><i className="fa fa-calendar-o text-primary" aria-hidden="true"></i></a>
    				</li>
    				<li className="d-inline-block">
    					<a href="javascript:void(0)" className="p-3 dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    						<i className="fa fa-ellipsis-v text-dark" aria-hidden="true"></i>
    					</a>
    					<div className="dropdown-menu dropdown-menu-right">
    					  <button className="dropdown-item" type="button"><i className="fa fa-user text-warning">&nbsp;</i> Action</button>
    					  <button className="dropdown-item" type="button"><i className="fa fa-user text-danger">&nbsp;</i> Another action</button>
    					  <button className="dropdown-item" type="button"><i className="fa fa-user text-primary">&nbsp;</i> Something else here</button>
    					</div>
    				</li>
    			</ul>
    		</div>
    	</div>

      	<div className="row">
      		<div className="col-md-9">
      			<div className="main-content">
      				<div className="content-row">
      					<ul className="card-main pl-0  mt-3">
      						{
                    !this.props.getProductsQuery.loading &&
                      this.props.getProductsQuery.products.map((c) => {
                        return (
                          <li key={c._id} className="d-inline-block mb-3">
              							<div className="card w-100">
              							  <img className="card-img-top" src={c.image_url} alt="Card image cap" />
              							  <div className="card-body">
              							  	<div className="title-area">
              							    	<h6 className="card-title d-inline-block">{c.name}</h6>
              							    	<span className="float-right text-danger">$ {c.price}</span>
              							    </div>
              							    <div className="subtitle">
              							    	<span className="d-block pb-2 mt-0">{c.vendor_name} from {c.vendor_location}</span>
              							    </div>
              							    <p className="card-text">{c.description}</p>
              							  </div>
              							</div>
              						</li>
                        )
                      })
                  }
      					</ul>
      				</div>
      			</div>
          </div>
          <div className="col-md-3 sidebar-content">
      			<div className="sidebar">
            {
              !this.props.getCategoriesQuery.loading &&
                this.props.getCategoriesQuery.categories.map((c) => {
                  count = this.countProductsByCategory(c, products);
                  return (
                    <div className="media border p-1 mt-3" key={c._id}>
            				  <img src={c.image_url} alt="John Doe" className="mr-3 rounded" />
            				  <div className="media-body">
            				  	<span className="badge badge-danger float-right">{count}</span>
            				  	<div className="center-media">
            				  		<nav aria-label="breadcrumb ">
            				  		  <ol className="breadcrumb float-left p-0 m-0">
                            <li className="breadcrumb-item"><a href="/">{c.name}</a></li>
                            {
                              c.children &&
                                c.children.map((ch) => {
                                count = this.countProductsByCategory(ch, products);
                                return (
                                  <li key={ch.name} className="breadcrumb-item"><a href="/">{ch.name}</a></li>
                                )
                              })
                            }
                            </ol>
            				  		</nav>
            				  	</div>
            				  </div>
            				</div>
                  )
                })
            }
      			</div>
      		</div>
      	</div>
      </div>
    );
  }
}

export default compose(
  graphql(getCategoriesQuery, { name: 'getCategoriesQuery' }),
  graphql(getProductsQuery, { name: 'getProductsQuery' })
)(App);
