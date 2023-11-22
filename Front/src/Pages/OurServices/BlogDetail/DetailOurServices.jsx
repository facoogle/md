import React from 'react';
import 'react-quill/dist/quill.snow.css'; // Importar los estilos de Quill desde el módulo
import './Preview.css'; // Importar tus estilos personalizados para Preview
import { Box, Typography, Grid } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useParams } from "react-router-dom";



import { format } from 'date-fns';
import { useState, useEffect } from 'react';
// Components

import { MiniCardFinal } from '../../../components/Cards/MiniCardFinal';
import { OurServicesCards } from './OurServicesCards';
import {Footer} from '../../../components/Footer/Footer'

import i2 from "../../../assets/services/secciones/2.png"
import i3 from "../../../assets/services/secciones/3.png"
import i4 from "../../../assets/services/secciones/4.png"
import i5 from "../../../assets/services/secciones/5.png"
import i6 from "../../../assets/services/secciones/6.png"
import i7 from "../../../assets/services/secciones/7.png"
import i8 from "../../../assets/services/secciones/8.png"
import i9 from "../../../assets/services/secciones/9.png"


export const DetailOurServices = () => {
  const is1024 = useMediaQuery('(max-width:1024px)');
  const is800 = useMediaQuery('(max-width:800px)');
  const is620 = useMediaQuery('(max-width:620px)');

  const { name } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0); // Mueve la página al principio cuando el componente se monta
  }, []);

  const [serviceValue, setServiceValue] = useState("")


  useEffect(()=>{
    if (name && initialValues[name]) {
      setServiceValue(initialValues[name]);
    }
  },[name])

 const initialValues = 
 {
  
  prp:

  {titulo:"Platelet Rich Plasma (PRP)",
  description:"Platelet Rich Plasma (PRP) is a regenerative injection therapy designed to stimulate the body’s natural healing. PRP is defined as autologous blood with concentrations of platelets above baseline levels, which contains at least seven growth factors.",
  imageFile:"https://medlineplus.gov/images/BloodTopics_share.jpg",
  descriptionImg:"PRP begins with drawing some of the patient’s blood.",
  description_2: "<p>Platelet Rich Plasma (PRP) is a regenerative injection therapy designed to stimulate the body’s natural healing. PRP is defined as autologous blood with <strong>concentrations of platelets</strong> above baseline levels, which contains at least seven growth factors.</p><p><br></p><p>Platelet Rich Plasma Prolotherapy (PRP) is very useful and effective in <strong>healing severe labral</strong> and meniscal (knee) tears, chronic osteoarthritis of the knee and even avascular necrosis of the hip.</p><p><br></p><p>PRP begins with drawing some of the patient’s blood and processing it through the use of a <strong>high speed centrifuge</strong>. Then using the growth factors in the blood to promote healing and pain relief in the affected area.</p><p><br></p><p>Dr. Mahl often uses PRP treatment when a patient is not responding quite as well as he had hoped to dextrose prolotherapy and/or has a more severe injury. Therefore, we occasionally use Human Growth Hormone (HGH) or Testosterone in very small amounts <strong>along </strong>with regular Prolotherapy solutions, in joints to enhance <strong>cartilage regeneration</strong>.</p><p><br></p>",
  how: "<p>In PRP, the concentration of platelets is 94%, whilst in normal blood the concentration of platelets is 6%. Platelets contain growth factors, proteins, cytokines and other biologic factors that initiate and regulate the phases of wound healing.</p><p><br></p><p>Platelets secrete growth factors such as platelet derived growth factor, vascular endothelial growth factor, fibroblast growth factor and insulin-like growth factor. They <strong>signal adult</strong> stem cells and repair cells of the injury site. The more platelets present at the injury site, the more repair can take place.</p><p><br></p><p>Platelet rich plasma prolotherapy is used for musculoskeletal injuries that require a bit more effect than dextrose prolotherapy or for which dextrose prolotherapy has caused only a partial improvement.</p><p><br></p><p>Platelet rich plasma (PRP) is blood plasma with <strong>concentrated platelets</strong> and other growth factors. Platelets are tiny cells that are critical to healing and to the activation of stem cells. As a result, they are the body’s primary source of bioactive tissue growth factors, and stem cells will not function without PRP or some component of it.</p><p><br></p><p>These signaling factors instruct the body to send stem cells to the area of damage and at the same time cause the stem cells to reproduce and begin repair. By concentrating the <strong>platelets drawn</strong> from your own blood supply, we can harness the power of platelets to relieve pain and stop inflammation for <strong>many musculoskeletal</strong> joint injuries and disorders that often cause chronic pain.</p><p><br></p><p>PRP can eliminate or reduce the need for surgery by enhancing the body’s innate ability to heal itself.</p><p><br></p>",
  howAdm:"<p>The process of administering PRP injections to a patient only takes less than an hour, including the preparation of PRP. The injectable PRP solution is injected into the damaged tendon, ligament, muscles, joint or a painful disc.</p><p><br></p><p>If the solution is injected around the structures of the spine, an x-ray-like fluoroscopy will be used to serve as guidance during the injection. This is to ensure that the solution is <strong>safely </strong>and <strong>properly</strong> <strong>administered </strong>into the affected site. Ultrasound-guidance is commonly used when the affected site is located in the extremities to ensure it is injected exactly into the areas like tendon, ligament or joint.</p><p><br></p><p>The procedure has minimal side effects. PRP injections produce tolerable pain, which only lasts for a few days. However, the level of discomfort depends on which part of the body is being treated. PRP solution that is injected into the joint results in minimal discomfort.</p><p><br></p><p>Before the procedure, you should consult Dr. Mahl about possible side effects of PRP injections.</p><p><br></p><p>HOW MANY <strong>PRP INJECTIONS</strong> ARE REQUIRED?</p><p><br></p><p>Depending on the severity and duration of the injury, 1-3 injections are recommended with a follow-up every 2-4 weeks after the initial injection.</p><p><br></p><p>Improvement may be seen within a few weeks or as early as 10 days after the initial injection and will gradually increase as the healing progresses. Both ultrasound and MRI images have shown definitive tissue repair after PRP therapy, confirming the healing process.</p>",
  whatCondition:"<p>Besides playing a significant role in the healing process, this procedure relieves pain. Meniscus tear treatment, knee pain treatment and general chronic pain management for shoulders, hips, rotator cuff tears, anterior cruciate ligament (ACL) injuries, back and neck injuries, just to name a few, can be treated with PRP therapy.</p><p><br></p><p>What’s more, many sports figures and elite athletes have been treated with PRP with excellent results. They understand that this non-surgical treatment relieves pain and promotes permanent healing and averts the need for surgery. For this reason, PRP treatment is the paradigm for how we treat acute and chronic pain.</p><p><br></p><p>When compared with surgery and cortisone injections, PRP therapy is less invasive and a relatively inexpensive treatment of pain caused by acute and chronic injuries. PRP is useful in the following conditions:</p><p><br></p><ul><li>Osteoarthritis of the knee, shoulder, hip and spine</li><li>ACL injuries (Anterior Cruciate Ligament)</li><li>Pelvic pain and instability</li><li>Golfer’s Elbow</li><li>Ankle sprains and strains</li><li>Chronic lower back pain</li><li>Spinal stenosis</li><li>Tennis elbow</li><li>Rotator cuff tears</li><li>Knee osteoarthritis</li><li>Achilles tendinitis</li><li>Plantar fasciitis</li><li>Medial collateral ligament tears</li><li>Acute and chronic tendon problems</li><li>Injuries to ligaments and tendons and muscles</li><li>Lateral collateral ligament tears</li><li>Meniscus tears</li><br></ul><p>Platelet rich plasma (PRP) therapy can be used to treat patients of all ages, and activity levels. Whether you are a professional athlete, weekend warrior, or a person suffering from chronic joint pain, PRP therapy can help relieve your pain symptoms.</p>",
},

prolotherapy:

  {titulo:"Prolotherapy",
  description:"Prolotherapy is an alternative medical treatment that stimulates healing in damaged ligaments and tendons to address chronic pain and joint instability. Despite its success and recognition from certain medical institutions, Prolotherapy faces skepticism from conventional medical establishments and insurance companies. This summary aims to present the main points of the text in four sections.",
  imageFile:i2,
  descriptionImg:"",
  description_2: "<p>While conventional medical practices have traditionally focused on symptom management, Prolotherapy aims to stimulate the body's natural healing mechanisms, fostering the repair of damaged ligaments and tendons. This summary delves into the world of Prolotherapy, highlighting its unique approach, challenges in gaining widespread recognition, and the contrast between symptom-focused treatments and the healing-oriented philosophy of Prolotherapy. As we explore the intricate landscape of medical choices, the significance of embracing alternative methods that prioritize healing becomes evident.</p>"  ,
  how: "<p>Prolotherapy, also known as regenerative injection therapy, stimulates the body's natural healing processes to repair injured ligaments and tendons. It involves injecting dextrose solution into damaged areas, triggering a healing response that promotes the growth of new collagen fibers and cells. This treatment addresses chronic pain and instability, often caused by lax or weak ligaments and tendons.&nbsp;</p><p><br></p><p>Unlike traditional treatments that manage symptoms, Prolotherapy focuses on addressing the root cause of joint pain and encouraging the healing of connective tissues. It is especially effective for joint pain, cartilage loss, acute injuries, and sports-related injuries. The technique has level one evidence supporting its efficacy, in contrast to many other surgical and nonsurgical treatments lacking rigorous scientific support.</p>"  ,
  howAdm:"<p>Prolotherapy treatment involves injecting a dextrose or sugar-water solution into the injured area where ligaments or tendons attach to bones. </p><p><br></p><p>This causes a controlled inflammatory reaction, allowing growth factors and blood vessels to aid in the healing process. The procedure is typically performed by experienced and skilled physicians. Patients might experience soreness and stiffness after treatment, which is part of the healing process. </p><p><br></p><p>Massages, moist heat, and other modalities can help alleviate post-treatment discomfort. Anti-inflammatory medications and narcotic drugs are discouraged during treatment, as they can hinder healing. Controlled exercise and mobilization are encouraged to promote tissue healing and faster recovery.</p>",
  whatCondition:"<p>Prolotherapy effectively treats a range of conditions, including chronic joint pain, arthritis, back pain, neck pain, fibromyalgia, sports injuries, whiplash injuries, tendinitis, torn tendons, ligament damage, cartilage issues, herniated disks, TMJ, and sciatica. </p><p><br></p><p>The treatment addresses damaged, unhealed ligaments and tendons, which are often the underlying cause of many joint problems. Patients seeking Prolotherapy have often tried conventional treatments that focus on symptom management. The technique offers an alternative approach by promoting natural healing and improving joint stability.</p>",
}

,

stem:

  {titulo:"Stem Cell Tehrapy",
  description:"Step into the realm of medical marvels with Stem Cell Therapy, an awe-inspiring approach that harnesses the potential of your body's own stem cells to initiate a cascade of healing processes. At the forefront of regenerative medicine's rapid evolution, Stem Cell Therapy holds the promise of transforming the landscape of healthcare. This introductory journey delves into the essence of Stem Cell Therapy, highlighting its ingenious mechanism, its pivotal role in medical advancements, and its potential to reshape the future of healing.",
  imageFile:i3,
  descriptionImg:"",
  description_2: ""  ,
  how:"<p>Unlocking the secrets of rejuvenation, Stem Cell Therapy operates on a fundamental principle: utilizing the innate power of stem cells to ignite the body's natural healing responses. </p><p><br></p><p>These remarkable cells, known as \"unspecialized\" cells, possess the extraordinary ability to transform into various types of specialized cells, facilitating tissue repair and regeneration. The therapy involves the extraction of these potent stem cells from one part of the body, followed by their strategic injection into areas that require healing. </p><p><br></p><p>This infusion of regenerative potential jumpstarts the healing process, replacing damaged cells with healthy ones. As we delve into the inner workings of Stem Cell Therapy, it becomes evident that this innovative approach is not just a treatment; it's a revolution in the way we heal.</p>",
  howAdm:"<p>Embark on a journey through the process of administering Stem Cell Therapy, a meticulously orchestrated procedure that takes place within the comforting walls of a medical clinic. Through the skillful hands of medical experts, stem cells are delicately introduced into the targeted area, often accompanied by local anesthesia for optimal comfort. </p><p><br></p><p>This minimally invasive technique ensures that the body's regenerative mechanisms are triggered without subjecting patients to the rigors of invasive surgeries. The synergy of medical expertise and cutting-edge technology paves the way for a transformative experience, as the body's own healing potential takes center stage.</p>",
  whatCondition:"<p>The tapestry of conditions that Stem Cell Therapy can address is as diverse as it is promising. Beyond being a beacon of hope for those grappling with joint pain, this therapeutic marvel extends its reach to a multitude of health challenges. Imagine wounds and incisions healing with newfound vigor, aided by the production of collagen and the growth of healthy skin tissue. Visualize orthopedic injuries finding solace in the regenerative prowess of Stem Cell Therapy, as new tissues emerge to mend muscles, cartilage, bones, ligaments, tendons, and even adipose tissues. Step into the realm of cardiovascular diseases, where Stem Cell Therapy offers a lifeline by aiding in the repair of scar tissue and normalizing blood flow. Traverse the landscape of neurodegenerative diseases, where the transplantation of adult stem cells sparks the formation of new brain cells, neurons, and synapses. Moreover, Stem Cell Therapy casts a ray of hope on immune rejection disorders, offering the tantalizing potential to produce insulin cells for diabetes patients. The possibilities are limitless, and as Stem Cell Therapy continues to evolve, it stands as a testament to the boundless potential of medical science.</p><p><br></p><p>GenLife Regenerative Medicine, situated in the vibrant heart of Miami, stands as a beacon of transformation. Our commitment to excellence is epitomized by our advanced and effective stem cell therapies, tailored to address the unique needs of each individual. Whether you seek relief from joint degeneration, acute pain, or other common injuries, our non-surgical stem cell treatments are designed to reinvigorate your body's natural healing abilities. Explore our realm of regenerative medicine procedures, a portal to a life of vitality and well-being. Our dedicated team is poised to accompany you on this journey to healing; reach out to us at +1 305-332-7234 and take the first step toward a brighter, healthier tomorrow.</p><p><br></p><p>Kindly note that the information provided on this platform is intended for informational purposes only and should not be construed as a replacement for professional medical advice. It is always prudent to consult with your healthcare provider for personalized guidance and recommendations tailored to your specific health needs.</p>",
}

,

microgragmented:

  {titulo:"Autologous Microfragmented Adipose",
  description:"Discover a revolutionary approach to healing at our Washington DC office through the utilization of microfragmented adipose tissue in musculoskeletal medicine. Backed by an array of well-executed studies, this innovative technique demonstrates remarkable efficacy and safety in addressing various musculoskeletal conditions, including osteoarthritis and tendinopathies. With a commitment to excellence, we adhere to an FDA-compliant process that has enriched clinical practice for a decade.",
  imageFile:i4,
  descriptionImg:"",
  description_2: ""  ,
  how:"<p>The human body possesses an innate capacity for healing, and microfragmented adipose tissue acts as a catalyst to channel this potential. Comprising an abundance of mesenchymal stem cells, pericytes (vascular cells), and structural collagen fibers, adipose emerges as a potent source of regenerative elements. These elements orchestrate and bolster the body's natural repair processes. </p><p><br></p><p>tOnce introduced to the injury site, these cells establish connections and release a multitude of chemical messengers, effectively restoring damaged tissue. Through the expert hands of our Washington, DC staff, microfragmented adipose tissue is precisely injected into the site of injury, triggering the commencement of the healing process.</p>",
  howAdm:"<p>Undertaken as a minor surgical procedure, the administration of microfragmented adipose tissue adheres to stringent sterile techniques. Our skilled team typically extracts high-quality adipose from the upper buttock region, although other areas like the abdomen may also be considered. During the procedure, you'll recline comfortably on a specially designed body pillow. The process commences with a meticulous cleansing of the skin using surgical skin cleaner (Chloroprep), followed by the application of surgical drapes to ensure an aseptic environment.</p><p><br></p><p>Our proficient physician marks the designated collection site with a surgical marking pen, preceded by local anesthetic injections at two entry points on the skin. Subsequently, a tumescent solution—a blend of saline, lidocaine, and a minute quantity of epinephrine—is introduced beneath the skin's surface using a blunt needle. This solution serves a multifaceted purpose: breaking down fat, inducing numbness, and minimizing potential bleeding beneath the skin.</p><p><br></p><p>Following a minimum 12-minute setting period for the solution and ensuring the area's numbness, an adipose collection cannula is placed beneath the skin for the gentle withdrawal of adipose tissue. While typically comfortable, you might experience slight sensations during the aspiration process.</p><p><br></p><p>The extracted adipose tissue, usually around 200 milliliters or less (equivalent to a 12-ounce soda can containing 355 milliliters), undergoes a proprietary processing phase. This step involves the gentle washing of adipose using saline, effectively eliminating inflammatory components while unveiling the mesenchymal stem cells and pericytes present within the adipose. This meticulous preparation optimally primes the adipose for injection.</p><p><br></p><p>Numbing the skin at the injection site is accomplished using a small needle and local anesthetic (buffered lidocaine). Guided by ultrasound or fluoroscopic assistance, our physician then skillfully injects the microfragmented adipose into the targeted injury sites.</p>",
  whatCondition:"<p>Microfragmented adipose tissue serves as an adaptable tool in addressing various musculoskeletal conditions, including but not limited to osteoarthritis and tendinopathies. This innovative approach holds promise for individuals seeking a less invasive alternative to traditional treatments.</p><p><br></p><p>Your recovery is a pivotal phase in this transformative process. Steering clear of non-steroidal anti-inflammatory drugs (NSAIDs) like ibuprofen is advised, as they counteract the inflammation that many regenerative therapies aim to stimulate. Instead, consider using acetaminophen for mild discomfort.</p><p><br></p><p>For the initial day post-procedure, avoid showering, and hold off on water immersion for three days. After 24 hours, you're free to remove any bandages.</p><p><br></p><p>Three days onwards, unless instructed otherwise, gradually engage in full range-of-motion exercises. While some soreness may be present, movement plays a pivotal role in the healing journey.</p><p><br></p><p>In the subsequent month, it's advisable to refrain from activities that previously caused discomfort. Exercise, fundamental for overall well-being, can be tailored to accommodate your condition, with the guidance of our skilled physicians and physical therapists.</p><p><br></p><p>Brief heat or ice therapy, alternating every 10 minutes, can provide comfort without hindering your therapeutic progress.</p><p><br></p><p>Dependent on the nature of the injury, physical therapy typically commences two to four weeks after the microfragmented adipose tissue injection. Expect incremental improvements in pain relief and functionality within the span of eight to twelve weeks post-injection.</p><p><br></p><p><br></p><p>We haver years of expertise to the forefront, administering adipose injections as a compelling avenue within regenerative medicine. This approach presents an alternative path to recovery from orthopedic conditions, sparing patients the need for invasive surgeries. Reach out to us via call or online appointment booking to delve into whether adipose injections align with your healing journey. Your well-being is our priority.</p>",
}

,

bone:

  {titulo:"Bone Marrow Aspirate Concentrate (BMAC)",
  description:"Welcome to our Washington, DC facility, where groundbreaking Bone Marrow Aspirate Concentrate (BMAC) treatment becomes a gateway to leveraging your body's innate healing capabilities. With a legacy dating back to the 1990s, BMAC has proven its worth in clinical settings through an array of dependable studies. In the realm of orthopedic and musculoskeletal injuries, BMAC stands as a beacon of hope, focusing on fostering the healing journey.",
  imageFile:i5,
  descriptionImg:".",
  description_2: ""  ,
  how:"<p>Initiating the BMAC journey involves the gentle aspiration of bone marrow from the posterior part of the pelvis. Fret not, for the procedure is much more manageable than it may seem.</p><p><br></p><p>To enhance your comfort and minimize any discomfort, we employ a procedure known as a caudal epidural. Through this method, a numbing agent (lidocaine) is injected into the epidural space just above the cleft in your buttocks, rendering the bone marrow cavity numb.</p><p><br></p><p>Guided by ultrasound, our skilled team maps the procedure, preparing the skin through ultrasound gel and a skin marking pen. After numbing the skin and bone surface at the aspiration site, a specialized needle is used to access the bone marrow cavity located within the hip bones near your lower back.</p><p><br></p><p>Bone marrow is then aspirated into a syringe, with a small amount of anticoagulant (heparin) to prevent clotting during the process. If you have a heparin allergy, kindly inform us.</p><p><br></p><p>This aspiration process is repeated at a minimum of three sites on the bone, potentially extending to six sites based on the required BMAC volume. An aspiration site is then secured with a bandage.</p><p><br></p><p>Subsequently, the bone marrow undergoes a filtration process to eliminate minute bone fragments. The filtered marrow is transferred to a sterile centrifuge tube, undergoing two cycles of centrifugation to isolate the MSCs, thus creating the final BMAC product.</p><p><br></p><p>With the bone marrow concentrate injections prepared, the injection site's skin is numbed using a small needle and local anesthetic. Our experienced provider then administers the BMAC into the injury site with precision, guided by ultrasound or fluoroscopic assistance.</p>",
  howAdm:"<p>Initiating the BMAC journey involves the gentle aspiration of bone marrow from the posterior part of the pelvis. Fret not, for the procedure is much more manageable than it may seem.</p><p><br></p><p>To enhance your comfort and minimize any discomfort, we employ a procedure known as a caudal epidural. Through this method, a numbing agent (lidocaine) is injected into the epidural space just above the cleft in your buttocks, rendering the bone marrow cavity numb.</p><p><br></p><p>Guided by ultrasound, our skilled team maps the procedure, preparing the skin through ultrasound gel and a skin marking pen. After numbing the skin and bone surface at the aspiration site, a specialized needle is used to access the bone marrow cavity located within the hip bones near your lower back.</p><p><br></p><p>Bone marrow is then aspirated into a syringe, with a small amount of anticoagulant (heparin) to prevent clotting during the process. If you have a heparin allergy, kindly inform us.</p><p><br></p><p>This aspiration process is repeated at a minimum of three sites on the bone, potentially extending to six sites based on the required BMAC volume. An aspiration site is then secured with a bandage.</p><p><br></p><p>Subsequently, the bone marrow undergoes a filtration process to eliminate minute bone fragments. The filtered marrow is transferred to a sterile centrifuge tube, undergoing two cycles of centrifugation to isolate the MSCs, thus creating the final BMAC product.</p><p><br></p><p>tWith the bone marrow concentrate injections prepared, the injection site's skin is numbed using a small needle and local anesthetic. Our experienced provider then administers the BMAC into the injury site with precision, guided by ultrasound or fluoroscopic assistance.</p>",
  whatCondition:"<p>BMAC emerges as a versatile solution, addressing various musculoskeletal conditions. Its applications extend to orthopedic challenges, underscoring its potential to make a transformative impact.</p><p><br></p><p>During recovery, steer clear of non-steroidal anti-inflammatory drugs (NSAIDs) like ibuprofen, as they counteract the inflammation crucial to the healing process. Opt for acetaminophen for mild discomfort relief.</p><p><br></p><p><br></p><p>In the initial day following the procedure, refrain from showering and water immersion for three days. After 24 hours, feel free to remove any bandages.</p><p><br></p><p><br></p><p>Three days onward, unless advised otherwise, gradually explore the full range of motion within the treated body part. Although soreness may linger, remember that movement is an integral aspect of the healing journey.</p><p><br></p><p><br></p><p>In the following month, exercise caution with activities that previously caused discomfort. Exercise holds the key to holistic well-being, and our experienced  physicians and physical therapists are here to guide you.</p><p><br></p><p><br></p><p>Brief sessions of heat or ice therapy, alternating every 10 minutes, provide solace without interfering with your regenerative therapy.</p><p><br></p><p><br></p><p>Depending on the nature of the injury, physical therapy typically commences two to four weeks post-injection. Over the course of eight to twelve weeks, anticipate progressive enhancements in pain relief and functionality.</p>",
}

,

neckandback:

  {titulo:"Regenerative Neck and Back Treatment",
  description:"Welcome to Regenerative Orthopedics & Sports Medicine, a beacon of cutting-edge solutions dedicated to addressing spine conditions using the power of your body's natural growth factors and cells. Our non-surgical and minimally invasive procedures are meticulously designed, employing advanced image-guidance for precision. Nestled in Washington, DC, our regenerative medicine treatments have unlocked the potential to relieve pain and reinstate function for an array of conditions.",
  imageFile:i6,
  descriptionImg:"",
  description_2: ""  ,
  how:"<p>Our´s approach revolves around harnessing your body's innate healing potential. By leveraging your own growth factors and cells, we ignite the healing cascade. These advanced techniques, performed with the utmost precision using image-guidance, target the root causes of spine conditions. Our procedures foster healing, making surgery an option of last resort.</p>",
  howAdm:"<p>Our regenerative medicine process is characterized by thoroughness, laying the foundation for enduring results and comprehensive recovery.</p><p><br></p><p>1. <strong>Evaluation</strong>: Your initial visit entails a comprehensive history and physical examination to pinpoint the root cause of the issue. Additionally, a biomechanical assessment of contributing factors may be conducted.</p><p><br></p><p>2. <strong>Ultrasound</strong>: A diagnostic musculoskeletal ultrasound delves into the soft tissues surrounding and supporting the spine, seeking areas of injury and constraint.</p><p><br></p><p>3. <strong>Supplementary Imaging</strong>: We review current imaging and might recommend additional imaging to correlate clinical findings with MRI and/or X-ray results.</p><p><br></p><p>4. <strong>Supplementary Diagnostic Procedures</strong>: Ultrasound and/or fluoroscopic-guided injections might be administered to confirm or exclude the pain source before suggesting optimal solutions.</p><p><br></p><p>5. <strong>Treatment</strong>: Tailored treatment options are presented, including ultrasound-guided diagnostic injections for confirmation, office-based ultrasound-guided procedures to stabilize soft tissues (1-2 treatments), and fluoroscopic-guided regenerative procedures at our surgery center.</p><p><br></p><p>6. <strong>Physical Therapy</strong>: Collaborative efforts with expert Physical Therapists aim to enhance healing and prevent re-injury. This encompasses gradually introducing stress to the treated area post-regenerative procedures, restoring equilibrium in muscle groups pivotal for spinal stability, and regaining physical activity independence by accomplishing function-specific goals.</p><p><br></p><p>7. <strong>Follow-Ups</strong>: Scheduled based on the procedure type, ensuring continuous monitoring and support.</p>",
  whatCondition:"<p>The regenerative medicine treatments have triumphed over an impressive range of conditions, including:</p><p><br></p><p>- Neck, mid back, and low back pain</p><p>- Cervical, thoracic, and lumbar strains and sprains</p><p>- Sciatica/radiculopathy due to herniated discs</p><p>- Spinal stenosis</p><p>- Degenerative disc disease, including annular tears</p><p>- Arthritis and facet/sacroiliac joint pain</p><p>- Cervicogenic headaches</p><p>- Lumbar spondylolysis and spondylolisthesis</p>",
}

,

epat:

  {titulo:"Extracorporeal pulse activation treatment (EPAT)",
  description:'Welcome to the world of cutting-edge healing with Extracorporeal Pulse Activation Treatment (EPAT). Derived from the Latin roots "extra" (outside) and "corp" (body), EPAT is a noninvasive therapy that takes place entirely outside the body. Say goodbye to needles and surgery – EPAT offers a revolution in pain relief.',
  imageFile:i7,
  descriptionImg:"",
  description_2: ""  ,
  how:"<p>Imagine a treatment that taps into the body's natural healing potential without any invasive measures. EPAT does just that. By employing specific sound waves, EPAT stimulates injured areas of the body. This technology, also known as shock wave therapy for pain, boasts a wide array of clinical applications, including addressing orthopedic and musculoskeletal conditions. Its potential extends even to patients grappling with chronic pain.</p><p><br></p><p>To fathom how EPAT facilitates healing in orthopedic and musculoskeletal injuries, one must grasp the origins of these painful conditions. As we age and subject our bodies to physical stress, our body tissues may degenerate. Factors like poor blood circulation, repetitive injuries, overuse, and muscle weakness contribute to degeneration and hinder proper healing. EPAT steps in by subjecting these injured tissues to specific sound waves, thus enhancing healing through improved blood circulation.</p>",
  howAdm:"<p>In the vicinity of Washington, DC, EPAT treatment is within reach. In our Washington DC office, qualified professionals administer EPAT treatments. The sessions last around 5-10 minutes, varying based on the condition being treated. Typically, 3-5 treatment sessions, spaced out weekly, are recommended to yield optimal results.</p>",
  whatCondition:"<p>EPAT presents a bridge to relief for a variety of conditions, including:</p><p><br></p><p>- Chronic pain</p><p>- Orthopedic injuries</p><p>- Musculoskeletal ailments</p><p>- Degenerative tissue conditions</p><p><br></p><p>The positive impact of EPAT is often noticeable within just three treatments. Some patients even report immediate pain alleviation post-treatment, while others experience gradual relief over a period of up to four weeks. EPAT can eliminate pain and restore full mobility, thereby enhancing your overall quality of life. Remarkably, over 80% of treated patients report significant pain reduction or freedom from pain.</p><p><br></p><p>This FDA-cleared technology, born in Europe and now adopted worldwide, combines medical expertise, state-of-the-art engineering, and exceptional quality in each EPAT device. Rigorous clinical studies and tests have confirmed its safety </p>",
}

,

entrapment:

  {titulo:"Nerve entrapment release",
  description:'Discover the breakthrough solution of percutaneous neuroplasty, a technique also known as nerve hydrodissection, designed to provide respite from painful nerves ensnared in scar tissue from surgery, trauma, or the strains of chronic repetitive movements. In the realm of pain management, this procedure, embraced by our Washington, DC practice, offers a precise and gentle approach to easing discomfort. By employing ultrasound guidance and injected fluids, percutaneous neuroplasty liberates nerves from entrapping scar tissue, thereby alleviating nerve compression.',
  imageFile:i8,
  descriptionImg:"",
  description_2: ""  ,
  how:"<p>Percutaneous neuroplasty employs the prowess of ultrasound technology and fluid dynamics to address nerve entrapment. By introducing injected fluids through a minimally invasive approach, our skilled Washington, DC practitioners expertly manipulate scar tissue that constricts or pinches nerves. This procedure is particularly versatile, suitable for both peripheral and spinal nerve roots, and often negates the need for surgery or extensive medication.</p>",
  howAdm:"<p>Administering percutaneous neuroplasty demands an intricate understanding of sonographic anatomy and adeptness in ultrasound needle guidance. Our accomplished ultrasound treatment staff in Washington, DC is well-versed in these prerequisites, ensuring the utmost precision and patient care. This procedure is characterized by its non-invasiveness and minimal discomfort.</p>",
  whatCondition:"<p>Percutaneous neuroplasty holds promise for various conditions, including:</p><p><br></p><p>- Nerve entrapment due to scar tissue</p><p>- Nerve compression post-surgery or trauma</p><p>- Nerve damage from repetitive movements</p><p><br></p><p>Recovery from percutaneous neuroplasty is relatively straightforward:</p><p><br></p><p>- Temporary numbness or weakness in the treated area, lasting 1 to 2 hours</p><p>- Mild soreness, usually requiring minimal or no pain medication</p><p>- Avoidance of NSAIDs like ibuprofen</p><p>- Acetaminophen for mild discomfort</p><p>- Limited immersion in water for 2 days and removal of bandages after 1 day</p><p>- Consideration of slings or crutches temporarily, depending on the treated body part</p><p><br></p><p><br></p><p>Heating or icing therapy for up to 10 minutes is optional and safe.</p>",
}

,

ultrasound:

  {titulo:"Musculoskeletal ultrasound",
  description:"Explore the realm of painless and secure medical imaging through musculoskeletal ultrasound, a cutting-edge approach that our Washington, DC medical team offers. This innovative technique allows a glimpse beneath the skin, offering insight into muscles, tendons, ligaments, nerves, and even bone surfaces. While musculoskeletal ultrasound excels in visualizing bodily structures, it's important to note that bones remain opaque to this imaging method.",
  imageFile:i9,
  descriptionImg:"",
  description_2: ""  ,
  how:"<p>Musculoskeletal ultrasound, sometimes referred to as dynamic ultrasound, harnesses the potency of sound waves without resorting to harmful ionizing radiation, as seen in x-rays or CT scans. It's a versatile imaging tool that boasts several advantages over traditional methods, such as MRIs. This dynamic approach allows for real-time assessment of moving or tensioned body parts, making it ideal for diagnosing a range of injuries.</p>",
  howAdm:"<p>Under the guidance of our skilled team in Washington, DC, musculoskeletal ultrasound involves these steps:</p><p><br></p><p>1. Positioning: You'll be guided on how to position your body for the examination.</p><p>2. Ultrasound Gel: A water-based, non-toxic gel is applied to the skin to aid in imaging.</p><p>3. Transducer Placement: An ultrasound probe, known as a transducer, is placed on your skin. It emits and receives sound waves to create images on the ultrasound machine.</p><p>4. Imaging and Doppler Ultrasound: The ultrasound machine interprets returning sound echoes, forming real-time images. Doppler ultrasound can even visualize blood flow within vessels.</p>",
  whatCondition:"<p>Musculoskeletal ultrasound serves as a powerful diagnostic tool for various conditions, including:</p><p><br></p><p>- Muscle injuries</p><p>- Tendon and ligament issues</p><p>- Nerve abnormalities</p><p>- Bone surface evaluation</p><p><br></p><p>Following the ultrasound exam, there are no specific recovery instructions. Your physician will discuss the findings with you, helping shape your treatment plan. In certain cases, diagnostic ultrasound-guided injections may be recommended to confirm the source of your pain, allowing for tailored treatment.</p>",
}












}


  return (
    <div style={{marginTop:"150px"}}>
    <div className="preview-container">
    <Box sx={{display:"flex", justifyContent:"center"}}>
      <Box sx={{ display: "flex", flexDirection: "column", width:"100%",maxWidth:"1440px", marginInline:is800?"32px":"64px" }}>
        <Typography sx={{ color: "#151023", fontFamily: "Ubuntu", fontSize: "48px", fontWeight: "500", lineHeight: "normal", marginBottom: "22px" }}>
          {serviceValue.titulo}
      
          {is1024?null:
          <Box data-aos="fade-right" data-aos-offset="-100" data-aos-duration={1100} data-aos-easing="ease-in-sine" data-aos-delay="300"
                  component="span"
                  sx={{
                    position: "absolute",
                    
                    left: 0,
                    width: is1024?"70%":"85%",
                    height: "3px",
                    background: "#6252A3",
                    zIndex: -1,
                    marginTop:"61px"
                  }}
                />}
          
        </Typography>



        

        <Typography sx={{ color: "#151023", fontFamily: "Rubik", fontSize: "20px", fontWeight: "400", lineHeight: "32px", marginBottom: "32px", marginTop:"12px" }}>
          {serviceValue?.description}
        </Typography>

        <Box sx={{ display: "flex", width: "100%", flexDirection: "column" }}>
          <Box sx={{ display: "flex", width: "100%", height:is620?"213px":"400px", justifyContent: "center" }}>
            <img style={{ width: "100%", height: is620?"213px":"400px", maxWidth: "676px", borderRadius: "32px" }} src={serviceValue?.imageFile} alt="Imagen de portada" />
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <div style={{marginInline:"10%",color:"#161122", textAlign:"center", fontFamily:"Rubik", fontSize:"16px", fontWeight:"300", fontStyle:"italic", lineHeight:"32px"}}>
              {serviceValue?.descriptionImg}
              </div>
          </Box>

          
         

          <Box sx={{marginTop:"40px", marginBottom:"90px"}}>
        <div className="" dangerouslySetInnerHTML={{ __html: serviceValue?.description_2 }} />
        </Box>



          
          
          
        </Box>

        <Typography sx={{ color: "#151023", fontFamily: "Ubuntu", fontSize: "32px", fontWeight: "500", lineHeight: "normal", marginBottom: "6px" }}>
        HOW DOES IT WORKS?
          
          {is1024?null:
          <Box data-aos="fade-right" data-aos-offset="-100" data-aos-duration={1100} data-aos-easing="ease-in-sine" data-aos-delay="300"
                  component="span"
                  sx={{
                    position: "absolute",
                    
                    left: 0,
                    width: is1024?"70%":"85%",
                    height: "3px",
                    background: "#6252A3",
                    zIndex: -1,
                    marginTop:"46px"
                  }}
                />}
          
        </Typography>
<Box sx={{marginTop:"40px", marginBottom:"50px"}}>
        <div className="" dangerouslySetInnerHTML={{ __html: serviceValue?.how }} />
</Box>

        <Typography sx={{ color: "#151023", fontFamily: "Ubuntu", fontSize: "32px", fontWeight: "500", lineHeight: "normal", marginBottom: "6px", textTransform:"uppercase" }}>
        how is it treated?
          
          {is1024?null:
          <Box data-aos="fade-right" data-aos-offset="-100" data-aos-duration={1100} data-aos-easing="ease-in-sine" data-aos-delay="300"
                  component="span"
                  sx={{
                    position: "absolute",
                    
                    left: 0,
                    width: is1024?"70%":"85%",
                    height: "3px",
                    background: "#6252A3",
                    zIndex: -1,
                    marginTop:"46px",
                    textTransform: "uppercase"
                  }}
                />}
          
        </Typography>

        
        <Box sx={{marginTop:"40px", marginBottom:"90px"}}>
        <div className="" dangerouslySetInnerHTML={{ __html: serviceValue?.howAdm }} />
        </Box>



  </Box>
</Box>
    <div style={{display:"flex", justifyContent:"center"}}>
      <div style={{background:is800?"#9FE2E3":"", marginInline:is800?"":"64px", maxWidth:"1440px"}}>
        <MiniCardFinal/>
      </div>
    </div>

    <Box sx={{display:"flex", justifyContent:"center", marginTop:"90px"}}>
      <Box sx={{ display: "flex", flexDirection: "column", width:"100%",maxWidth:"1440px", marginInline:is800?"32px":"64px" }}>
      <Typography sx={{ color: "#151023", fontFamily: "Ubuntu", fontSize: "32px", fontWeight: "500", lineHeight: "normal", marginBottom: "6px" }}>
      WHAT CONDITIONS CAN BE TREATED ?
          
          {is1024?null:
          <Box data-aos="fade-right" data-aos-offset="-100" data-aos-duration={1100} data-aos-easing="ease-in-sine" data-aos-delay="300"
                  component="span"
                  sx={{
                    position: "absolute",
                    
                    left: 0,
                    width: is1024?"70%":"85%",
                    height: "3px",
                    background: "#6252A3",
                    zIndex: -1,
                    marginTop:"46px"
                  }}
                />}
          
        </Typography>
  <Box sx={{marginTop:"40px"}}>
        <div className="" dangerouslySetInnerHTML={{ __html: serviceValue?.whatCondition }} />
      </Box>
      </Box>
    </Box>

  <OurServicesCards/>
      

    </div>
    <div style={{marginTop:"330px"}}>
    <Footer/>
    </div>
    </div>
  );
};

