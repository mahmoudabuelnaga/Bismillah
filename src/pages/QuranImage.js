import React, { Component } from "react";
import Footer from "../components/Footer";
import { Button, InputNumber, Space } from 'antd';
import 'antd/dist/antd.css';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/scss/image-gallery.scss";
import "react-image-gallery/styles/css/image-gallery.css";
import './QuranImage.css'

class QuranImage extends Component{
    state = {
        page_number: 0,
        value: 0,
        surah_names: [
            {name: 'سُّورَةُ الفَاتِحَة', number: 1},
            {name: 'سُّورَةُ البَقَرَة', number: 2},
            {name: 'سُّورَةُ آل عِمرَان', number: 50},
            {name: 'سُّورَةُ النِّسَاء', number: 77},
            {name: 'سُّورَةُ المَائدة', number: 106},
            {name: 'سُّورَةُ الأنعَام', number: 128},
            {name: 'سُّورَةُ الأعرَاف', number: 151},
            {name: 'سُّورَةُ الأنفَال', number: 177},
            {name: 'سُّورَةُ التوبَة', number: 187},
            {name: 'سُّورَةُ يُونس', number: 208},
            {name: 'سُّورَةُ هُود', number: 221},
            {name: 'سُّورَةُ يُوسُف', number: 235},
            {name: 'سُّورَةُ الرَّعْد', number: 249},
            {name: 'سُّورَةُ إبراهِيم', number: 255},
            {name: 'سُّورَةُ الحِجْر', number: 262},
            {name: 'سُّورَةُ النَّحْل', number: 267},
            {name: 'سُّورَةُ الإسْرَاء', number: 282},
            {name: 'سُّورَةُ الكهْف', number: 293},
            {name: 'سُّورَةُ مَريَم', number: 305},
            {name: 'سُّورَةُ طه', number: 312},
            {name: 'سُّورَةُ الأنبيَاء', number: 322},
            {name: 'سُّورَةُ الحَج', number: 332},
            {name: 'سُّورَةُ المُؤمنون', number: 342},
            {name: 'سُّورَةُ النُّور', number: 350},
            {name: 'سُّورَةُ الفُرْقان', number: 359},
            {name: 'سُّورَةُ الشُّعَرَاء', number: 367},
            {name: 'سُّورَةُ النَّمْل', number: 377},
            {name: 'سُّورَةُ القَصَص', number: 385},
            {name: 'سُّورَةُ العَنكبوت', number: 396},
            {name: 'سُّورَةُ الرُّوم', number: 404},
            {name: 'سُّورَةُ لقمَان', number: 411},
            {name: 'سُّورَةُ السَّجدَة', number: 415},
            {name: 'سُّورَةُ الأحزَاب', number: 418},
            {name: 'سُّورَةُ سَبَأ', number: 428},
            {name: 'سُّورَةُ فَاطِر', number: 434},
            {name: 'سُّورَةُ يس', number: 440},
            {name: 'سُّورَةُ الصَّافات', number: 446},
            {name: 'سُّورَةُ ص', number: 453},
            {name: 'سُّورَةُ الزُّمَر', number: 458},
            {name: 'سُّورَةُ غَافِر', number: 467},
            {name: 'سُّورَةُ فُصِّلَتْ', number: 477},
            {name: 'سُّورَةُ الشُّورَى', number: 483},
            {name: 'سُّورَةُ الزُّخْرُف', number: 489},
            {name: 'سُّورَةُ الدُّخان', number: 496},
            {name: 'سُّورَةُ الجاثِية', number: 499},
            {name: 'سُّورَةُ الأحقاف', number: 502},
            {name: 'سُّورَةُ مُحَمّد', number: 507},
            {name: 'سُّورَةُ الفَتْح', number: 511},
            {name: 'سُّورَةُ الحُجُرات', number: 515},
            {name: 'سُّورَةُ ق', number: 518},
            {name: 'سُّورَةُ الذَّاريَات', number: 520},
            {name: 'سُّورَةُ الطُّور', number: 523},
            {name: 'سُّورَةُ النَّجْم', number: 526},
            {name: 'سُّورَةُ القَمَر', number: 528},
            {name: 'سُّورَةُ الرَّحمن', number: 531},
            {name: 'سُّورَةُ الواقِعَة', number: 534},
            {name: 'سُّورَةُ الحَديد', number: 537},
            {name: 'سُّورَةُ المُجادَلة', number: 542},
            {name: 'سُّورَةُ الحَشْر', number: 545},
            {name: 'سُّورَةُ المُمتَحَنة', number: 549},
            {name: 'سُّورَةُ الصَّف', number: 551},
            {name: 'سُّورَةُ الجُّمُعة', number: 553},
            {name: 'سُّورَةُ المُنافِقُون', number: 554},
            {name: 'سُّورَةُ التَّغابُن', number: 556},
            {name: 'سُّورَةُ الطَّلاق', number: 558},
            {name: 'سُّورَةُ التَّحْريم', number: 560},
            {name: 'سُّورَةُ المُلْك', number: 562},
            {name: 'سُّورَةُ القَلـََم', number: 564},
            {name: 'سُّورَةُ الحَاقّـَة', number: 566},
            {name: 'سُّورَةُ المَعارِج', number: 568},
            {name: 'سُّورَةُ نُوح', number: 570},
            {name: 'سُّورَةُ الجِنّ', number: 572},
            {name: 'سُّورَةُ المُزَّمّـِل', number: 574},
            {name: 'سُّورَةُ المُدَّثــِّر', number: 575},
            {name: 'سُّورَةُ القِيامَة', number: 577},
            {name: 'سُّورَةُ الإنسان', number: 578},
            {name: 'سُّورَةُ المُرسَلات', number: 580},
            {name: 'سُّورَةُ النـَّبأ', number: 582},
            {name: 'سُّورَةُ النـّازِعات', number: 583},
            {name: 'سُّورَةُ عَبَس', number: 585},
            {name: 'سُّورَةُ التـَّكْوير', number: 586},
            {name: 'سُّورَةُ الإنفِطار', number: 587},
            {name: 'سُّورَةُ المُطـَفِّفين', number: 587},
            {name: 'سُّورَةُ الإنشِقاق', number: 589},
            {name: 'سُّورَةُ البُروج', number: 590},
            {name: 'سُّورَةُ الطّارق', number: 591},
            {name: 'سُّورَةُ الأعلی', number: 591},
            {name: 'سُّورَةُ الغاشِيَة', number: 592},
            {name: 'سُّورَةُ الفَجْر', number: 593},
            {name: 'سُّورَةُ البَـلـَد', number: 594},
            {name: 'سُّورَةُ الشــَّمْس', number: 595},
            {name: 'سُّورَةُ اللـَّيل', number: 595},
            {name: 'سُّورَةُ الضُّحی', number: 596},
            {name: 'سُّورَةُ الشَّرْح', number: 596},
            {name: 'سُّورَةُ التـِّين', number: 597},
            {name: 'سُّورَةُ العَلـَق', number: 597},
            {name: 'سُّورَةُ القـَدر', number: 598},
            {name: 'سُّورَةُ البَيِّنَة', number: 598},
            {name: 'سُّورَةُ الزلزَلة', number: 599},
            {name: 'سُّورَةُ العَادِيات', number: 599},
            {name: 'سُّورَةُ القارِعَة', number: 600},
            {name: 'سُّورَةُ التَكاثـُر', number: 600},
            {name: 'سُّورَةُ العَصْر', number: 601},
            {name: 'سُّورَةُ الهُمَزَة', number: 601},
            {name: 'سُّورَةُ الفِيل', number: 601},
            {name: 'سُّورَةُ قـُرَيْش', number: 602},
            {name: 'سُّورَةُ المَاعُون', number: 602},
            {name: 'سُّورَةُ الكَوْثَر', number: 602},
            {name: 'سُّورَةُ الكَافِرُون', number: 603},
            {name: 'سُّورَةُ النـَّصر', number: 603},
            {name: 'سُّورَةُ المَسَد', number: 603},
            {name: 'سُّورَةُ الإخْلَاص', number: 604},
            {name: 'سُّورَةُ الفَلَق', number: 604},
            {name: 'سُّورَةُ النَّاس', number: 604},
        ],
        images : 
            [...Array(605)].map((_, i) => ({
                original:`assets/img/qouran-images/${i}.jpg`,
                thumbnail:`assets/img/qouran-images/${i}.jpg`,
            }))
        ,
    }

    handleNumberPlusChange = (e) => {
        e.preventDefault();
        const number = this.state.page_number
        this.setState({
            page_number: number+1
        })
    }

    handleNumberMinsChange = (e) => {
        e.preventDefault();
        const number = this.state.page_number
        this.setState({
            page_number: number-1
        })
    }

    showAfterIcon = () => {
        if(this.state.page_number < 604){
            return <img alt="" onClick={(e)=>this.handleNumberPlusChange(e)} src="assets/img/5.png" />
        }
    }


    showPreviosIcon = () => {
        if(this.state.page_number > 0){
            return <img alt="" onClick={(e)=>this.handleNumberMinsChange(e)} src="assets/img/6.png" />
        }
    }

    handlepageNumberChange = (e) => {
        const page_number =  e
        this.setState({
            page_number
        })
    }

    filteredOptions = this.state.surah_names.filter(o => !this.state.surah_names.includes(o));

    setSelectedItems = (e) => {
        const page_number = e.target.value
        // console.log(page_number)
        this.setState({
            page_number
        })
    }


    render(){
        // console.log(this.state.page_number)
        return(
            <>
                <section className="youtube spad">
                    <div style={{ width: '100%'}} className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title">
                                    <h2>القرآن الكريم</h2>
                                    {/* <h1>The Holy Quran</h1> */}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="section-title">
                                <Space>
                                <InputNumber min={0} max={604} value={this.state.page_number} onChange={this.handlepageNumberChange} />
                                    {this.state.page_number > 0?(
                                    <Button
                                        type="primary"
                                        onClick={() => {
                                        this.setState({
                                            page_number: 0
                                        });
                                        }}
                                    >
                                        إعادة تعيين
                                    </Button>
                                    ): ''}
                                </Space>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="section-title">                                
                                <select
                                        style={{direction:'rtl'}}
                                        className="primary-btn border-btn"
                                        name="category-list"
                                        id="category-list"
                                        onChange={this.setSelectedItems}
                                    >
                                        <option value="0">فهرس بأسماء السور</option>
                                        {this.state.surah_names.map((surat) => (
                                            <option value={`${surat.number}`}>{surat.name}</option>
                                        ))}
                                </select>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title">
                                    <ImageGallery 
                                        items={this.state.images} 
                                        showPlayButton={false}
                                        isRTL={true}
                                        startIndex={this.state.page_number}
                                        // disableThumbnailScroll={true}
                                    />
                                    {/* {this.showAfterIcon()}  */}
                                        {/* <img alt="" style={{width: '70%'}} src={`assets/img/qouran-images/${this.state.page_number}.jpg`} /> */}
                                    {/* {this.showPreviosIcon()} */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </>
        )
    }
}

export default QuranImage;