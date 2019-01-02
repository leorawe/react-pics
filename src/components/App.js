import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
   state = {images: []};
   onSearchSubmit = async (term) => {
        //console.log(term);
       const response =  await unsplash.get('/search/photos', {
            //object to customize request
            params: {query: term},
            
        });
       // console.log(response.data.results);
       this.setState({images: response.data.results});
    }

    // .then((response) => {
    //     //function in future
    //     console.log(response.data.results);
    //     console.log(response.data.results.length);
    //     console.log(response.data.total);
    // })
    render(){
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
               {/*  Found: {this.state.images.length} images  */}
                <ImageList
                images={this.state.images} 
                />
            </div>
        );
    }
}

export default App;