import React from 'react';  
import { StaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from '../layouts/layout'; 
import Posts from '../components/posts';

const Blog = () =>{
  return (
     <Layout>
       <SEO 
            title="Blog"
            description="I like to write, play the guitar, and explore ways on how I can help the environment throught code"
       
        /> 
           
        <div className="page">
            <div className="blog-posts">
            <StaticQuery
                 query={graphql`
                    query { 
                    allStrapiArticle(filter: {status: {eq: "published"}}) {
                    edges {
                    node {
                      strapiId
                      slug
                      title
                      category {
                        name
                      }
                      image {
                        childImageSharp {
                            fixed(width: 800, height: 500) {
                              src
                            }
                        }
                      }
                    }
                  }
                }
              }
            `}
              render={data => ( 
                  <Posts article={data.allStrapiArticle.edges}/>   
              )}
            />
            <div className="blog-post">
                <div className="image">
                  <img alt="Me" src="https://lh3.googleusercontent.com/xM5fS4E9TwFLYrSr_4RMRYtyFzFGXzxCaNaP3846LbXLMpm6-pzesP8gFamwewkmWAi71uD_ly7zg3SoREFPRdg-JeEJbbZefQrLigHkw5YOTiRIzzWGLIM1qc0EHLjVnbsjRXT9BjA1vteR06uyi1TkPYJnPq8v3nuoJiriQnlIdWauV-vInsBzyhLdm4b1XZqkHwMFcLVUN4kXN_AVUcImRMLH41eyzyrF44AdpKjVitLG-zT9gty174A-ufTjiYKlBYcrAX5O-_KCLywAvzcXl0nAK4PoZhgqqYEQrakOrl5xrCXQRueunCD6U8E9BoP3TEQZeoza9pqH42TlHNE0bJSfCZ4STTmiSBVTRZTqaT9V5-A8jeMyV_ay9sn8DSzqdLMLFK68yqiqhmysHL9E3BAibe_Bv-tLhzsgHgnCUxUI87bkuLj2Q17tU6-IyqWC9H-zocH5ZACDXBjQi384nQNt3radQUOV5haUc7DJ7maGLr6QGbCbsAX6tIanCMBr1z2eeYAMvFq7Yy9t28wAAOnBoVpxT8wk_49c8SOPhhPZf-15iFAedM7kGj3380MstBBxQ9RnoKdjv2X0ZO1TyZ94u3CLlt17I0LkspIvKhRwdpnExJhUC8pIFAr84PriWkmF90256XRQT7pU-sUlimrCZl3K7gcIPSWed4uz6KOxsy9hjvEFH-4q=w1232-h1642-no?authuser=0" />
                </div>
                <div className="blog-info">
                  <div className="category"><a href="#">#personal</a></div>
                  <div className="title"><h2>From Belize to Taiwan admist coronavirus pandemic!</h2></div>
                  <div className="exerpt">orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                  <div className="author">Luis Manzanero</div>
                  <div className="published-date">September, 23rd, 2019</div>
                </div>
              </div>
              <div className="blog-post">
                <div className="image">
                  <img alt="Me" src="https://lh3.googleusercontent.com/5CDRVMVkhajwXAUpIUFRaG4K5_8ej3l-lzIfC1gRyrVO770fmzRl5CBuAnHkTxEihNovILERcLVzEumz3TXXDe1HlL99OhvAnf4s6_D-_zI0qTpFyfTbFyZbFMnIBPsBVpG74epsJbLky5VDyiXd17-xBy3NlFg2bXfRGMdwuYiGEkaq1br2F4RofTWVpj6D08iSiFO4h40NUDxOfd4wodzwrK6i2U-qd3iIlT-Nh1-_GQ6kcQwVdtFn_S0dU3V1YEinOK7i-0dJsQV7Ys5sufr43KEZVjPH7VpF1XZbHix5MdwKtYkIe05kDU9UiPcSYIfYUW8sItYj7BzqwCmJQMh1DliBizCgbCQvxteHhDvxZWr5FPKoPnwdB5gZQP-fHhM0Prupdg6NOOvaQ99B5gKIccCcf2T7N7hf0LVUV4UL8OuHDUFBZv5KJyXzoYU4Tk5fIMpv_qlBCsHARuqKnIGFe7yjyt5DL4B1P4JovlkhMwCMeZRfHIadyStC1TRNmVz8XEjCHRp9JbR0UfhbJUs4BuyYCi407tucZlpf3Net7aeJ29H1pKDO2UMroEc6UtNgljf89mqfNGBpQQJwuKQiSgG6pCe45cCr7VrWO5KOikvReCiZumQQgcH-WYjNNOliypksti_vUtZyZE_5Ruy9PLsPEDyls_WI-KAyCwKXEAgI2tR2HOrxsteB=w1232-h1642-no?authuser=0" />
                </div>
                <div className="blog-info">
                  <div className="category"><a href="#">#personal</a></div>
                  <div className="title"><h2>How important is the Riparian forest?</h2></div>
                  <div className="exerpt">orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                  <div className="author">Luis Manzanero</div>
                  <div className="published-date">September, 23rd, 2019</div>
                </div>
              </div>
              <div className="blog-post">
                <div className="image">
                  <img alt="Me" src="https://lh3.googleusercontent.com/45vg-FBeP8FjiPQpEtZTpHyHNKj_Hh6ynNUNhnapN2cohv5Ly7VYSEa9bsw0u1N5C4C65LNBjH6ohiQgLSaWL1KW73Ri50cHUSyNqZ-J4A3u9MI36axELi8AN3f71nxJGszqy-c6LozesSB_qbGvEGX1NFfjrk44bNK6Tc1SD1lQdrBvmEscRRGoF4mVT8n9sT4M3xnAlRxXes8-lwTtD_y41ePRSVz2U16JzMBIQ9gPvvJ9TNJCYPvQ47xI6fLY6a_BdOe70zXjrrZJ7tesPVvPCyS6O3s1NI5WozKTnd0ZBp0xZwrWSAAVVp_feF24jyK35uJS8FzTQrlnlLQbuWq-OHoGy3uLzwwl4-iXPZKNdEWqFn66THR2FJuhy8lR1Gs5pb4TFDb6VxazuuhlCnSrBI-CEMXTt9qXN8jfSw_OSlp_w0x6oPaol2VKO0kdthqLDvHGyYj3dU_um2HTBL90LYfa9-Elakco8ZLrcNYODh-LearnM6rdmDdCs4zTTj1wOrrNJkiRtUQA9LB92kv5BC9wHbbCaVN47eV3vfr1a-nKpZdsh7DnbYe926Q0Jw1xzvJqDLSmzzwqrY9G1YFwBMYkBRVsCjceZBWDo_biMeFTLQCIQlXfJSXR8ul-7djC5KFN71kCTBDfrPKufcKiDCrF87R52vj37FTvvDq4L0M1kZzOtPV-T-zr=w2464-h1642-no?authuser=0" />
                </div>
                <div className="blog-info">
                  <div className="category"><a href="#">#personal</a></div>
                  <div className="title"><h2>What life is really like in Belize</h2></div>
                  <div className="exerpt">orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                  <div className="author">Luis Manzanero</div>
                  <div className="published-date">September, 23rd, 2019</div>
                </div>
              </div>
              <div className="blog-post">
                <div className="image">
                  <img alt="Me" src="https://avatars2.githubusercontent.com/u/20497361?s=400&u=fcce070b780d1229d7d97890113a85f00cf4a049&v=4" />
                </div>
                <div className="blog-info">
                  <div className="category"><a href="#">#personal</a></div>
                  <div className="title"><h2>How I overcame Depression in this day and age of depravity</h2></div>
                  <div className="exerpt">orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                  <div className="author">Luis Manzanero</div>
                  <div className="published-date">September, 23rd, 2019</div>
                </div>
              </div>
            </div>
        </div>
     </Layout>
  );
}

export default Blog;
