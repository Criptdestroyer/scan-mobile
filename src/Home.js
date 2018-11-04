import React, { Component 					} 	from 'react';
import { FlatList, View, Dimensions 		} 	from 'react-native';
import { Container, Content, Text 			} 	from 'native-base';
import Toolbar 									from './components/Toolbar';
import ImageItem 								from './components/ImageItem';
import Carousel 								from 'react-native-snap-carousel';
import Icon 									from 'react-native-vector-icons/FontAwesome';

const deviceWidth = Dimensions.get('window').width;

import * as ax from 'axios';
import qs from 'qs';
import API_URL from './config';

const axios = ax.create({
	baseURL: API_URL,
	headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
});

export default class Home extends Component {

	static navigationOptions = ({ navigation }) => {
		return {
			header: <Toolbar 
						title={ 'E-ticketing' } 
						navigation={navigation} 
						noBackButton 
						menu 
						topUpMenu
						popUpMenu/>
		};
    };
    constructor(props) {

		super(props);
		this.state = { data: [] };

    }

    componentDidMount() {
    	axios.get('/events/index')
    		.then(response => {
    			let data = response.data;
    			
    			data.map(x => {
    				x.image = 'https://sydemy.com/home/../admission/admin/slider_banner/images/slider_IC.jpg';
    				x.navigateTo = '#';
    				return x;
    			});

    			this.setState({ data: data });
    		})
    		.catch(error => {
    			console.log(error);
    		});
    }

    render() {

		const { navigate } = this.props.navigation;

		return (
			<Container>
				<Content>
					<View style={{ flexDirection: 'row', flexWrap: 'wrap', marginHorizontal: 6, marginTop: 10, alignItems: 'center' }}>
						<Icon name="magic" size={20} style={{ marginRight: 7 }}/>
						<Text style={{ fontSize: 20 }}>Events</Text>
					</View>
					<FlatList
						numColumns={2}
						data={this.state.data}
						renderItem={({ item }) =>
							<ImageItem
								title={item.title}
								image={item.image}
								navigateTo={() => navigate(item.navigateTo, { item })}/>	
						}
						keyExtractor={( item, index ) => index.toString()}/>
				</Content>
			</Container>
		);

	}

}