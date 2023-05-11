import React from 'react';
import PropTypes from 'prop-types';
import './products.css';
// static images
// import Talk from '../../../../images/talk.png'


function Products({
    head, para1, para2, img, polarity,
}) {
    return (
        <div className="ProductsMainClass">
            <div className={`ContentHolderProductsComp ${polarity? 'imageFirstProduct': ''}`}>
                <div className="textSectionProductComp">
                    <h2 className="productHeadProductComp">
                        {
                            head
                        }
                    </h2>
                    <p className="productParagraphProductComp">
                        {
                            para1
                        }
                    </p>
                    <p className="productParagraphProductComp">
                        {
                            para2
                        }
                    </p>
                </div>
                <div className="imageSectionProductComp">
                    <div className="graphiteHolderProductComp">
                        <div className="transluteGreenCircles lightGreenCircleControler" />
                        <div className="transluteGreenCircles darkGreenCircleControler" />
                    </div>
                    <div className={`ImageTalkHolderProductHolder ${polarity? '': 'marginleftAutoProductComp'}`}>
                        <img src={img} className="ImageTalkProductProductComp" alt="talk in action" />
                    </div>
                </div>
            </div>
        </div>
    );
}

Products.propTypes = {
    head: PropTypes.string.isRequired,
    para1: PropTypes.string.isRequired,
    para2: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    polarity: PropTypes.bool.isRequired,
};

export default Products;