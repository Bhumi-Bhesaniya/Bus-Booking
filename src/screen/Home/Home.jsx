import flite from '../../assest/images/plan.png';
import umbrella from '../../assest/images/umbrella_2.png';
import hotel from '../../assest/images/hotel.png';
import car from '../../assest/images/car.png';
import swap from '../../assest/images/switch_arrow.png';
import search from '../../assest/images/search.png';
import searchicon from '../../assest/images/search_img.png';
import React, { useState, useEffect, useRef } from 'react';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// Dummy data for cities (In a real app, this would come from an API)
const allCities = [
    { code: 'DEL', name: 'New Delhi', airport: 'Indira Gandhi International Airport India' },
    { code: 'BOM', name: 'Mumbai', airport: 'Chhatrapati Shivaji International Airport India' },
    { code: 'BLR', name: 'Bengaluru', airport: 'Kempegowda International Airport India' },
    { code: 'MAA', name: 'Chennai', airport: 'Chennai International Airport India' },
    { code: 'CCU', name: 'Kolkata', airport: 'Netaji Subhas Chandra Bose International Airport India' },
    { code: 'HYD', name: 'Hyderabad', airport: 'Rajiv Gandhi International Airport India' },
    { code: 'PNQ', name: 'Pune', airport: 'Pune Airport India' },
    { code: 'AMD', name: 'Ahmedabad', airport: 'Sardar Vallabhbhai Patel International Airport India' },
    { code: 'DAC', name: 'Dhaka', airport: 'Hazrat Shahjalal International Airport Bangladesh' },
    { code: 'CXB', name: "Cox's Bazar", airport: "Cox's Bazar Airport Bangladesh" },
];

// --- City Selection Modal Component ---
function CitySelectionModal({ isOpen, onClose, onSelectCity,  otherCityCode }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredCities, setFilteredCities] = useState(allCities);
    const modalRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            setSearchTerm('');
            setFilteredCities(allCities);
        }
    }, [isOpen]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, onClose]);

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        const filtered = allCities.filter(city =>
            city.name.toLowerCase().includes(value.toLowerCase()) ||
            city.code.toLowerCase().includes(value.toLowerCase()) ||
            city.airport.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredCities(filtered);
    };

    const handleCityClick = (city) => {
        // અહીંયા city.code ને onSelectCity ફંક્શનને પાસ કરો
        onSelectCity(city.code);
        onClose(); // પસંદગી પછી મોડલ બંધ કરો
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="city-selection-modal" ref={modalRef}>
                <div className="modal-header">
                    <h2>Select City</h2>
                    <button className="close-button" onClick={onClose}>&times;</button>
                </div>
                <div className="modal-body">
                    <input
                        type="text"
                        placeholder="Search for a city or airport"
                        className="modal-search-input"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        autoFocus
                    />
                    <ul className="city-list">
                        {filteredCities.length > 0 ? (
                            filteredCities.map(city => (
                                <li
                                    key={city.code}
                                    onClick={() => handleCityClick(city)}
                                    // અન્ય શહેર સાથે સમાન હોય તો ડિસેબલ કરો
                                    className={city.code === otherCityCode ? 'disabled-option' : ''}
                                >
                                    <div className="city-details">
                                        <span className="city-code">{city.code}</span>
                                        <span className="city-name">{city.name}</span>
                                    </div>
                                    <p className="city-airport">{city.airport}</p>
                                </li>
                            ))
                        ) : (
                            <li className="no-results">No results found.</li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}

function Home() {
    const [activeTab, setActiveTab] = useState('Flight');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);

    const [fromCityCode, setFromCityCode] = useState('DEL');
    const [toCityCode, setToCityCode] = useState('BOM');

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeCitySelectionFor, setActiveCitySelectionFor] = useState(null);

    const handleOpenCitySelection = (forInput) => {
        setActiveCitySelectionFor(forInput);
        setIsModalOpen(true);
    };

    const handleCloseCitySelection = () => {
        setIsModalOpen(false);
        setActiveCitySelectionFor(null);
    };

    const handleCitySelect = (selectedCode) => {
        // અહીંયાથી જ મોડલ બંધ કરવું વધુ યોગ્ય છે
        handleCloseCitySelection();

        if (activeCitySelectionFor === 'from') {
            if (selectedCode === toCityCode) {
                alert("Origin and Destination cannot be the same! Please select a different city.");
                return;
            }
            setFromCityCode(selectedCode);
        } else if (activeCitySelectionFor === 'to') {
            if (selectedCode === fromCityCode) {
                alert("Origin and Destination cannot be the same! Please select a different city.");
                return;
            }
            setToCityCode(selectedCode);
        }
    };

    const handleSwapCities = () => {
        setFromCityCode(toCityCode);
        setToCityCode(fromCityCode);
    };

    const getCityDetails = (code) => {
        return allCities.find(city => city.code === code);
    };

    const renderInputRoundContent = () => {
        const fromCityDetails = getCityDetails(fromCityCode);
        const toCityDetails = getCityDetails(toCityCode);

        return (
            <>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='posi_tion'>
                            <label className='input_round_text one_way'>
                                <input type='radio' name='flight_value' value="1" defaultChecked />
                                <p className='one_way'> Round Trip</p>
                            </label>
                            <label className='input_round_text one_way'>
                                <input type='radio' name='flight_value' value="2" />
                                <p className='one_way'>One Way</p>
                            </label>
                            <label className='input_round_text one_way'>
                                <input type='radio' name='flight_value' value="3" />
                                <p className='one_way'> Multi-City</p>
                            </label>
                        </div>

                        <div>
                            <div className='nav_nav'>
                                <div className='posi_position'>
                                    {/* FROM City Display - Clickable */}
                                    <div className='dac_dhaka' onClick={() => handleOpenCitySelection('from')} style={{ cursor: 'pointer' }}>
                                        <div className='dac_dac'>
                                            <h5 className='dac_h5'>{fromCityDetails ? fromCityDetails.code : 'N/A'}</h5>
                                        </div>
                                        <div>
                                            <p className='dhaka_bangla_22'>{fromCityDetails ? fromCityDetails.name : 'Select Origin'}</p>
                                            <p className='dhaka_bangla_23'>{fromCityDetails ? fromCityDetails.airport : ''}</p>
                                        </div>
                                    </div>

                                    <div className='swap' onClick={handleSwapCities}>
                                        <img className='svg_svg' src={swap} alt="Swap icon" />
                                    </div>

                                    {/* TO City Display - Clickable */}
                                    <div className='dac_dhaka' onClick={() => handleOpenCitySelection('to')} style={{ cursor: 'pointer' }}>
                                        <div className='dac_dac'>
                                            <h5 className='dac_h5'>{toCityDetails ? toCityDetails.code : 'N/A'}</h5>
                                        </div>
                                        <div>
                                            <p className='dhaka_bangla_22'>{toCityDetails ? toCityDetails.name : 'Select Destination'}</p>
                                            <p className='dhaka_bangla_23'>{toCityDetails ? toCityDetails.airport : ''}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='nav_2_input'>
                                    <div className="number_placeholder">
                                        <p className='para_date'>{startDate.getDate().toString().padStart(2, '0')}</p>
                                    </div>
                                    <DatePicker
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                        dateFormat="MMMM"
                                        className="form-control place_holder"
                                        placeholderText="Select start date"
                                    />
                                </div>
                                <div className='nav_2_input'>
                                    <div className="number_placeholder">
                                        <p className='para_date'>{endDate ? endDate.getDate().toString().padStart(2, '0') : '--'}</p>
                                    </div>
                                    <DatePicker
                                        selected={endDate}
                                        onChange={(date) => setEndDate(date)}
                                        dateFormat="MMMM"
                                        className="form-control place_holder"
                                        placeholderText="Select end date"
                                    />
                                </div>
                                <button className='search_btn'><img className='svg_svg_2' src={search} alt="Search icon" /></button>
                            </div>
                        </div>

                        <div className='next_sec_2'>
                            <div className='label_checkbox'>
                                <div className='label_checkbox_3'>
                                    <img className='svg_svg_3' src={searchicon} alt="Search icon" />
                                    <p className='label_checkbox'>Search Preferred Airline</p>
                                </div>

                                <label className='label_checkbox_2'>
                                    <input type='checkbox' name='flight_options' value="ReturnToAnotherCity" />
                                    <p className='label_checkbox_4'>Return To Or From Another City/Airport?</p>
                                </label>

                                <label className='label_checkbox_2'>
                                    <input type='checkbox' name='flight_options' value="DirectFlights" />
                                    <p className='label_checkbox_4'>Direct Flights</p>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                {/* City Selection Modal - RENDERED HERE */}
                <CitySelectionModal
                    isOpen={isModalOpen}
                    onClose={handleCloseCitySelection}
                    onSelectCity={handleCitySelect}
                    currentSelectedCityCode={activeCitySelectionFor === 'from' ? fromCityCode : toCityCode}
                    otherCityCode={activeCitySelectionFor === 'from' ? toCityCode : fromCityCode}
                />
            </>
        );
    };

    return (
        <>
            {/* Banner Section */}
            <section>
                <div className='container'>
                    <div className='row discover_233'>
                        <div className='col-sm-12 col-md-12 col-lg-12 col-xl-12'>
                            <div className='air_plane'>
                                <h1 className='discover_million'>Discover Millions Of Affordable Flights</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Booking Details Section */}
            <section>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-sm-10 col-md-10 col-lg-10 col-xl-10 section_4'>
                            <div className='flight_5 packages_home'>
                                <div
                                    className={`flight_52 ${activeTab === 'Flight' ? 'active-tab' : ''}`}
                                    onClick={() => setActiveTab('Flight')}
                                >
                                    <img className="flite_sec_2" src={flite} alt="Flight icon" />
                                    <p className='flight_home_2'>Flight</p>
                                </div>

                                <div
                                    className={`flight_5 ${activeTab === 'Packages' ? 'active-tab' : ''}`}
                                    onClick={() => setActiveTab('Packages')}
                                >
                                    <img className='umbrella_2' src={umbrella} alt="Packages icon" />
                                    <p className='flight_home'>Packages</p>
                                </div>

                                <div
                                    className={`flight_5 ${activeTab === 'Hotels' ? 'active-tab' : ''}`}
                                    onClick={() => setActiveTab('Hotels')}
                                >
                                    <img className="hotel_2" src={hotel} alt="Hotels icon" />
                                    <p className='flight_home'>Hotels</p>
                                </div>

                                <div
                                    className={`flight_5 ${activeTab === 'Cars' ? 'active-tab' : ''}`}
                                    onClick={() => setActiveTab('Cars')}
                                >
                                    <img className="car_2" src={car} alt="Cars icon" />
                                    <p className='flight_home'> Cars</p>
                                </div>
                            </div>

                            {/* Render content based on activeTab */}
                            <div className='input_round'>
                                {renderInputRoundContent()}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;