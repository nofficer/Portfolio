
import React, { useEffect } from 'react';
import '../../App.css'
import SVG3DTagCloud from '3d-word-cloud'

var entries = [

    { label: 'React', url: '', target: '_top', tooltip: 'Lorem ipsum' },
    { label: 'Python', url: '', target: '_top', tooltip: 'Dolor sit amet' },
    { label: 'Keras', url: '', target: '_top', tooltip: 'Consetetur sadipscing' },
    { label: 'Tensorflow', url: '', target: '_top', tooltip: 'Sed diam' },
    { label: 'MySQL', url: '', target: '_top' },
    { label: 'Google Cloud Platform', url: '', target: '_top', tooltip: 'At vero' },
    { label: 'Redux', url: '', target: '_top', tooltip: 'Lorem ipsum' },
    { label: 'Node', url: '', target: '_top', tooltip: 'Dolor sit amet' },
    { label: 'Docker', url: '', target: '_top', tooltip: 'Consetetur sadipscing' },
    { label: 'REST APIs', url: '', target: '_top', tooltip: 'Sed diam' },
    { label: 'Neural Networks', url: '', target: '_top' },
    { label: 'Kotlin', url: '', target: '_top', tooltip: 'At vero' },
    { label: 'Pandas', url: '', target: '_top', tooltip: 'Lorem ipsum' },
    { label: 'Numpy', url: '', target: '_top', tooltip: 'Dolor sit amet' },
    { label: 'Javascript', url: '', target: '_top', tooltip: 'Consetetur sadipscing' },
    { label: 'YOLO Darknet', url: '', target: '_top', tooltip: 'Sed diam' },
    { label: 'Flask', url: '', target: '_top', tooltip: 'Sed diam' },
    { label: 'Machine Learning', url: '', target: '_top', tooltip: 'Sed diam' },


];

var settings = {

    entries: entries,
    width: 480,
    height: 480,
    radius: '65%',
    radiusMin: 75,
    bgDraw: false,
    bgColor: '#111',
    opacityOver: 1.00,
    opacityOut: 0.5,
    opacitySpeed: 6,
    fov: 800,
    speed: 0.5,
    fontFamily: 'Tourney',
    fontSize: '20',
    fontColor: '#fa541c',
    fontWeight: 'bold',//bold
    fontStyle: 'normal',//italic
    fontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
    fontToUpperCase: true,
    tooltipFontFamily: 'Oswald, Arial, sans-serif',
    tooltipFontSize: '11',
    tooltipFontColor: '#fff',
    tooltipFontWeight: 'normal',//bold
    tooltipFontStyle: 'normal',//italic
    tooltipFontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
    tooltipFontToUpperCase: false,
    tooltipTextAnchor: 'left',
    tooltipDiffX: 0,
    tooltipDiffY: 10,
    animatingSpeed: 0.001,
    animatingRadiusLimit: 0

};

const SkillsMatrix = () => {
  useEffect(() => {
    var svg3DTagCloud = new SVG3DTagCloud( document.getElementById( 'holder'  ), settings );
  }, [])



  return(

    <div id='holder'>
    </div>
  )

}

export default SkillsMatrix
