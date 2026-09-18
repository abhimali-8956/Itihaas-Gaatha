
function filterTrips(type,btn){
 document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active')); btn.classList.add('active');
 document.querySelectorAll('.trip').forEach(card=>{
   card.style.display = (type==='all' || card.dataset.type.includes(type)) ? '' : 'none';
 });
}
// FORT STORY PAGES
const fortStories={
shivneri:{name:'Shivneri Fort',tag:'Birthplace of Chhatrapati Shivaji Maharaj',image:'https://kevinstandagephotography.wordpress.com/wp-content/uploads/2024/12/ksp_0669.jpg',location:'Junnar, Pune district',height:'Historic hill fort',famous:'Shivneri is most famous as the birthplace of Chhatrapati Shivaji Maharaj. Jijabai raised the young Shivaji within this fortified hill, and the place is deeply connected with the beginnings of his life and vision.',story:'Inside the strong walls of Shivneri, Jijabai gave birth to Shivaji Maharaj on 19 February 1630. The fort became part of his formative years, where ideas of courage, self-rule, discipline and responsibility took shape. Today visitors can walk through the birthplace area, see the Shivai Devi Temple and Badami Talav, and experience the dramatic cliffs that made Shivneri such a strong natural defence.',highlights:['Birthplace of Shivaji Maharaj','Jijabai & Shivaji legacy','Shivai Devi Temple','Badami Talav']},
lohagad:{name:'Lohagad Fort',tag:'The Iron Fort of the Sahyadris',image:'https://static.toiimg.com/thumb/msid-118394451,width-748,height-499,resizemode=4,imgsize-117534/Lohagad-Fort.jpg',location:'Lonavala region',height:'1,033 m approx.',famous:'Lohagad means “Iron Fort”, reflecting its strong defensive character. It is also loved for its accessible trek, monsoon greenery and the dramatic Vinchu Kata ridge.',story:'Lohagad changed hands among several powers before becoming an important Maratha stronghold. Chhatrapati Shivaji Maharaj captured it in 1648 and used the fort strategically. The long ridge called Vinchu Kata resembles a scorpion’s tail and gives the trek its signature view. During monsoon, the approach becomes especially green and atmospheric, making Lohagad one of the most accessible fort adventures near Pune.',highlights:['Vinchu Kata','Monsoon greenery','Pavana Lake views','Beginner-friendly trek']},
raigad:{name:'Raigad Fort',tag:'The capital of the Maratha Empire',image:'https://media.insider.in/image/upload/w_800/v1768213886/zfknfvk75yoonhldpzh5.jpg',location:'Mahad, Raigad district',height:'1,356 m approx.',famous:'Raigad is famous as the capital of Chhatrapati Shivaji Maharaj’s Maratha Empire and the place where he was crowned Chhatrapati in 1674.',story:'After the rise of Swarajya, Raigad became the seat of Maratha power. Shivaji Maharaj was crowned here in 1674, turning the fort into the centre of administration, strategy and royal life. The fort still carries traces of that world—royal structures, gateways, markets and viewpoints over the Sahyadris. A visit feels less like a simple trek and more like walking through the capital of a historic kingdom.',highlights:['Shivaji Maharaj’s coronation','Raj Darbar','Takmak Tok','Raigad Ropeway / steps']},
sinhagad:{name:'Sinhagad Fort',tag:'The fort of Tanaji Malusare’s sacrifice',image:'https://www.pelago.com/img/products/IN-India/khadakwasla-dam-sinhagad-fort-and-panshet-dam-tour-by-car/6aaae47c-0243-49a0-99b5-379c08d4a8a6_khadakwasla-dam-sinhagad-fort-and-panshet-dam-tour-by-car-large.jpg',location:'Donaje, Pune district',height:'1,312 m approx.',famous:'Sinhagad is most famous for the 1670 battle in which Tanaji Malusare led the Maratha assault to recapture Kondhana from the Mughals.',story:'When Shivaji Maharaj decided to reclaim Kondhana, Tanaji Malusare took charge of the difficult mission. His warriors climbed the steep fortification at night and fought a fierce battle. Tanaji was fatally wounded, but the Marathas captured the fort. The story of his sacrifice became so powerful that Kondhana was renamed Sinhagad—“Lion Fort”. The fort today keeps that memory alive through Tanaji’s memorial and the old battle landscape.',highlights:['Tanaji Malusare','1670 Battle of Sinhagad','Tanaji memorial','Pune & Sahyadri views']},
torna:{name:'Torna Fort',tag:'The first fort captured by Shivaji Maharaj',image:'https://sangramrgavhane.wordpress.com/wp-content/uploads/2024/06/1000065073.jpg?w=1024',location:'Velhe, Pune district',height:'1,403 m — highest fort in Pune district',famous:'Torna is famous for being the first fort captured by the young Shivaji Maharaj in 1646, at the age of 16.',story:'At just sixteen, Shivaji Maharaj captured Torna and made the fort an important early symbol of his dream of Swarajya. The victory gave momentum to his expansion and the fort was later strengthened and renamed Prachandagad. Today the trek is known for steep climbs, ridges, Zunjar Machi and Budhla Machi, combining a demanding adventure with a powerful chapter of Maratha history.',highlights:['First fort captured by Shivaji','Prachandagad','Zunjar Machi','Budhla Machi']},
rajgad:{name:'Rajgad Fort',tag:'The first capital of Swarajya',image:'https://upload.wikimedia.org/wikipedia/commons/d/d8/Rajgad_Fort.jpg',location:'Pune district',height:'1,376 m approx.',famous:'Rajgad was the first capital of the Maratha Empire under Shivaji Maharaj and remained the capital for more than two decades.',story:'Originally known as Murumbdev, Rajgad was captured by Shivaji Maharaj in 1647 and transformed into a formidable capital. For around 26 years it witnessed major decisions, military planning and important moments of the royal family. Rajaram Maharaj was born here and Saibai, Shivaji Maharaj’s wife, passed away here. The fort’s Padmavati, Sanjivani and Suvela machis make the trek feel like a journey through a living military landscape.',highlights:['First capital of Swarajya','Padmavati Machi','Sanjivani Machi','Suvela Machi & Nedhe']},
purandar:{name:'Purandar Fort',tag:'Birthplace of Sambhaji Maharaj',image:'https://pbs.twimg.com/media/EPwIAutUUAE9Zua.jpg',location:'Pune district',height:'1,374 m approx.',famous:'Purandar is remembered for its strategic importance, the birth of Chhatrapati Sambhaji Maharaj, and the fierce defence led by Murarbaji Deshpande.',story:'Purandar became a major Maratha stronghold after Shivaji Maharaj captured it in 1646. In 1665, Mughal forces under Mirza Raja Jai Singh besieged the fort, and commander Murarbaji Deshpande became renowned for his determined defence. The Treaty of Purandar followed the siege, making the fort an important chapter in the political history of the Marathas. It is also associated with the birth of Sambhaji Maharaj.',highlights:['Sambhaji Maharaj’s birthplace','Murarbaji Deshpande','Treaty of Purandar','Vajragad']},
pratapgad:{name:'Pratapgad Fort',tag:'The fort of the Afzal Khan encounter',image:'https://upload.wikimedia.org/wikipedia/commons/a/ac/Pratapgad_fort_in_Maharashtra.jpg',location:'Satara district, near Mahabaleshwar',height:'1,080 m approx.',famous:'Pratapgad is famous for the historic 1659 encounter and battle involving Chhatrapati Shivaji Maharaj and Afzal Khan.',story:'Built under Shivaji Maharaj’s orders to control the strategic Par Pass, Pratapgad became a turning point in Maratha history in 1659. Afzal Khan marched with a large Bijapur force, but Shivaji Maharaj used careful planning and the fort’s terrain to his advantage. The resulting victory strengthened the Maratha position and became one of the most remembered episodes of Shivaji Maharaj’s career.',highlights:['Battle of Pratapgad','Shivaji Maharaj & Afzal Khan','Bhavani Temple','Mahadarwaja']},
harishchandragad:{name:'Harishchandragad',tag:'Konkan Kada, caves and ancient mountain history',image:'https://3.bp.blogspot.com/-oOdAlAMW8Q0/VC5ABjnNQ4I/AAAAAAAAMDE/T_Xs2kz8b9k/s1600/DSC_0832.JPG',location:'Malshej region',height:'1,422 m approx.',famous:'Harishchandragad is famous for its ancient history, Kedareshwar Cave, Harishchandreshwar Temple and the spectacular Konkan Kada cliff.',story:'Harishchandragad traces its history back many centuries and has served as a strategic mountain stronghold. Its plateau combines history and nature in a remarkable way: ancient temples and caves sit beside dramatic cliffs and peaks. The Kedareshwar Cave and the huge Konkan Kada are the stars of the journey. The trek is more demanding than the beginner forts, but the landscapes and sense of scale make it unforgettable.',highlights:['Konkan Kada','Kedareshwar Cave','Harishchandreshwar Temple','Taramati Peak']}
};
const fortStoryModal=document.getElementById('fortStoryModal');
function openFortStory(key){const f=fortStories[key];if(!f)return;document.getElementById('fortStoryHero').style.backgroundImage=`url('${f.image}')`;document.getElementById('fortStoryTitle').textContent=f.name;document.getElementById('fortStoryKicker').textContent=f.tag;document.getElementById('fortStoryTagline').textContent=f.location;document.getElementById('fortStoryWhy').textContent=f.famous;document.getElementById('fortStoryText').textContent=f.story;document.getElementById('fortStoryFacts').innerHTML=`<div class="fort-fact"><strong>📍 Location</strong><span>${f.location}</span></div><div class="fort-fact"><strong>⛰️ Height</strong><span>${f.height}</span></div><div class="fort-fact"><strong>🏰 Experience</strong><span>History + Trek + Views</span></div>`;document.getElementById('fortStoryHighlights').innerHTML=f.highlights.map(x=>`<span class="fort-highlight">${x}</span>`).join('');fortStoryModal.classList.add('show');fortStoryModal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';}
function closeFortStory(){fortStoryModal.classList.remove('show');fortStoryModal.setAttribute('aria-hidden','true');document.body.style.overflow='';}
document.getElementById('closeFortStory').onclick=closeFortStory;fortStoryModal.addEventListener('click',e=>{if(e.target===fortStoryModal)closeFortStory()});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&fortStoryModal.classList.contains('show'))closeFortStory()});

// SUPABASE + ALBUMS + REVIEWS
const SUPABASE_URL = window.SUPABASE_CONFIG?.url;
const SUPABASE_PUBLISHABLE_KEY = window.SUPABASE_CONFIG?.publishableKey;
const supabaseClient = (window.supabase && SUPABASE_URL && SUPABASE_PUBLISHABLE_KEY)
  ? window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
      auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false }
    })
  : null;

const albumData={
 kalu:{title:'Kalu Waterfall',desc:'Waterfall moments, monsoon trails and group memories.'},
 'camp-stars':{title:'Camp & Stars',desc:'Campfires, tents, night skies and weekend memories.'},
 sahyadri:{title:'Sahyadri Trails',desc:'Green trails, monsoon walks and hidden nature spots.'},
 forts:{title:'Fort Stories',desc:'Historic forts, viewpoints and heritage adventures.'},
 'camp-nights':{title:'Camp Nights',desc:'Night camping, friends, stars and unforgettable evenings.'}
};

let albumCache=[];
let activeAlbum=null;
const albumModal=document.getElementById('albumModal');
const albumGrid=document.getElementById('albumGrid');
const albumTitle=document.getElementById('albumTitle');
const albumDescription=document.getElementById('albumDescription');
const albumUpload=document.getElementById('albumPhotoUpload');

function backendReady(){
  return Boolean(supabaseClient);
}

function setStatus(el,message,isError=false){
  if(!el)return;
  el.textContent=message;
  el.style.display='block';
  el.style.background=isError?'#fff1ef':'#f2f7f4';
  el.style.color=isError?'#9b2c20':'#244f45';
}

async function loadAlbums(){
  if(!backendReady()) return;
  const {data,error}=await supabaseClient.from('albums').select('id,slug,title,description,cover_url').order('sort_order');
  if(error){console.error('Could not load albums',error);return;}
  albumCache=data||[];
  document.querySelectorAll('.album-card').forEach(card=>{
    const album=albumCache.find(a=>a.slug===card.dataset.album);
    if(album?.cover_url) card.style.backgroundImage=`url("${album.cover_url}")`;
  });
}

async function getAlbumPhotos(albumId){
  const {data,error}=await supabaseClient
    .from('album_photos')
    .select('id,storage_path,file_name,alt_text,created_at')
    .eq('album_id',albumId)
    .order('created_at',{ascending:false});
  if(error) throw error;
  return data||[];
}

function photoUrl(path){
  return supabaseClient.storage.from('album-photos').getPublicUrl(path).data.publicUrl;
}

async function renderAlbum(){
  if(!albumGrid || !activeAlbum)return;
  albumGrid.innerHTML='';
  if(!backendReady()){
    albumGrid.innerHTML='<div class="album-empty">Gallery backend is not configured yet.</div>';
    return;
  }
  try{
    const photos=await getAlbumPhotos(activeAlbum.id);
    if(!photos.length){
      albumGrid.innerHTML='<div class="album-empty">No photos in this album yet.<br>Add the first memory using <b>＋ Add Photos to This Album</b>.</div>';
      return;
    }
    const fragment=document.createDocumentFragment();
    photos.forEach(photo=>{
      const d=document.createElement('div'); d.className='album-photo';
      const img=document.createElement('img');
      img.src=photoUrl(photo.storage_path);
      img.alt=photo.alt_text || photo.file_name || `${activeAlbum.title} photo`;
      img.loading='lazy'; img.decoding='async';
      d.appendChild(img); fragment.appendChild(d);
    });
    albumGrid.appendChild(fragment);
  }catch(error){
    console.error('Could not load album photos',error);
    albumGrid.innerHTML='<div class="album-empty">We could not load this album right now. Please try again.</div>';
  }
}

async function showAlbum(slug){
  const album=albumCache.find(a=>a.slug===slug) || {id:null,slug,title:albumData[slug]?.title||'Album',description:albumData[slug]?.desc||'Your trip photos.'};
  activeAlbum=album;
  albumTitle.textContent=album.title;
  albumDescription.textContent=album.description || albumData[slug]?.desc || '';
  albumModal.classList.add('show');
  albumModal.setAttribute('aria-hidden','false');
  await renderAlbum();
}

function hideAlbum(){
  albumModal.classList.remove('show');
  albumModal.setAttribute('aria-hidden','true');
  activeAlbum=null;
  if(albumUpload) albumUpload.value='';
}

document.querySelectorAll('.album-card').forEach(card=>card.addEventListener('click',()=>showAlbum(card.dataset.album)));
document.getElementById('closeAlbum')?.addEventListener('click',hideAlbum);
albumModal?.addEventListener('click',e=>{if(e.target===albumModal)hideAlbum();});

function fileToOptimizedWebp(file,maxDimension=1600,quality=.82){
  return new Promise((resolve,reject)=>{
    const img=new Image();
    const url=URL.createObjectURL(file);
    img.onload=()=>{
      const scale=Math.min(1,maxDimension/Math.max(img.naturalWidth,img.naturalHeight));
      const canvas=document.createElement('canvas');
      canvas.width=Math.max(1,Math.round(img.naturalWidth*scale));
      canvas.height=Math.max(1,Math.round(img.naturalHeight*scale));
      const ctx=canvas.getContext('2d',{alpha:false});
      ctx.drawImage(img,0,0,canvas.width,canvas.height);
      URL.revokeObjectURL(url);
      canvas.toBlob(blob=>blob?resolve(blob):reject(new Error('Image compression failed')),'image/webp',quality);
    };
    img.onerror=()=>{URL.revokeObjectURL(url);reject(new Error('Invalid image'));};
    img.src=url;
  });
}

albumUpload?.addEventListener('change',async()=>{
  if(!activeAlbum?.id || !backendReady()) return;
  const files=[...albumUpload.files].filter(file=>file.type.startsWith('image/')).slice(0,10);
  if(!files.length)return;
  const originalLabel=albumUpload.closest('label');
  if(originalLabel) originalLabel.style.pointerEvents='none';
  try{
    for(const file of files){
      if(file.size>12*1024*1024){console.warn('Skipping large image',file.name);continue;}
      const optimized=await fileToOptimizedWebp(file);
      const path=`${activeAlbum.id}/${crypto.randomUUID()}.webp`;
      const {error:uploadError}=await supabaseClient.storage.from('album-photos').upload(path,optimized,{
        cacheControl:'31536000',contentType:'image/webp',upsert:false
      });
      if(uploadError) throw uploadError;
      const {error:dbError}=await supabaseClient.from('album_photos').insert({
        album_id:activeAlbum.id,storage_path:path,file_name:file.name,alt_text:`${activeAlbum.title} photo`
      });
      if(dbError) throw dbError;
    }
    await renderAlbum();
  }catch(error){
    console.error('Could not save photo',error);
    alert('One or more photos could not be uploaded. Please try again.');
  }finally{
    albumUpload.value='';
    if(originalLabel) originalLabel.style.pointerEvents='';
  }
});

// REVIEWS
const reviewModal=document.getElementById('reviewModal');
const openReview=document.getElementById('openReview');
const closeReview=document.getElementById('closeReview');
const reviewForm=document.getElementById('reviewForm');
const reviewStatus=document.getElementById('reviewStatus');

function showReview(){reviewModal?.classList.add('show');reviewModal?.setAttribute('aria-hidden','false');}
function hideReview(){reviewModal?.classList.remove('show');reviewModal?.setAttribute('aria-hidden','true');}
openReview?.addEventListener('click',showReview);
closeReview?.addEventListener('click',hideReview);
reviewModal?.addEventListener('click',e=>{if(e.target===reviewModal)hideReview();});

function renderStars(rating){return '★'.repeat(rating)+'☆'.repeat(5-rating);}

async function loadReviews(){
  const list=document.getElementById('reviewsList');
  if(!list || !backendReady())return;
  const {data,error}=await supabaseClient
    .from('reviews')
    .select('id,name,trip,rating,review,created_at')
    .order('created_at',{ascending:false})
    .limit(12);
  if(error){console.error('Could not load reviews',error);return;}
  list.innerHTML='';
  if(!data?.length){
    list.innerHTML='<div class="review"><div class="stars">★★★★★</div><p>Be the first traveller to share your experience.</p><strong>Itihaas Gatha Traveller</strong></div>';
    return;
  }
  const fragment=document.createDocumentFragment();
  data.forEach(item=>{
    const card=document.createElement('article'); card.className='review';
    const stars=document.createElement('div'); stars.className='stars'; stars.textContent=renderStars(item.rating);
    const text=document.createElement('p'); text.textContent=`“${item.review}”`;
    const name=document.createElement('strong'); name.textContent=item.name;
    const trip=document.createElement('small'); trip.className='review-trip'; trip.textContent=item.trip;
    card.append(stars,text,name,trip); fragment.appendChild(card);
  });
  list.appendChild(fragment);
}

reviewForm?.addEventListener('submit',async e=>{
  e.preventDefault();
  if(!backendReady()){
    setStatus(reviewStatus,'Supabase is not configured yet. Add your project URL and publishable key first.',true);
    return;
  }
  const formData=new FormData(reviewForm);
  const rating=Number(formData.get('rating'));
  const payload={
    name:String(formData.get('name')||'').trim(),
    trip:String(formData.get('trip')||'').trim(),
    rating,
    review:String(formData.get('review')||'').trim()
  };
  if(!payload.name || !payload.trip || !payload.review || !Number.isInteger(rating) || rating < 1 || rating > 5){
    setStatus(reviewStatus,'Please fill in your name, trip, rating, and review.',true); return;
  }
  const button=reviewForm.querySelector('button[type="submit"]');
  if(button) button.disabled=true;
  try{
    const {error}=await supabaseClient.from('reviews').insert(payload);
    if(error) throw error;
    reviewForm.reset();
    setStatus(reviewStatus,'Thank you! Your review is live on the website.');
    await loadReviews();
    setTimeout(hideReview,1600);
  }catch(error){
    console.error('Could not submit review',error);
    setStatus(reviewStatus,'We could not submit your review right now. Please try again.',true);
  }finally{if(button)button.disabled=false;}
});

Promise.all([loadAlbums(),loadReviews()]).catch(console.error);

function sendWhatsApp(e){
 e.preventDefault();
 const name=document.getElementById('name').value;
 const phone=document.getElementById('phone').value;
 const interest=document.getElementById('interest').value;
 const level=document.getElementById('level').value;
 const date=document.getElementById('date').value || 'Not decided';
 const msg=document.getElementById('message').value || 'No additional message';
 const text=`Hello Itihaas Gatha!%0A%0AName: ${encodeURIComponent(name)}%0AWhatsApp: ${encodeURIComponent(phone)}%0AInterested in: ${encodeURIComponent(interest)}%0ALevel: ${encodeURIComponent(level)}%0APreferred date: ${encodeURIComponent(date)}%0AMessage: ${encodeURIComponent(msg)}`;
 window.open(`https://wa.me/917796884237?text=${text}`,'_blank');
}

function toggleMobileMenu(){
  const nav=document.getElementById('primaryNav');
  const btn=document.getElementById('menuToggle');
  const open=nav.classList.toggle('show');
  btn.setAttribute('aria-expanded', String(open));
  btn.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
  btn.textContent=open ? '✕' : '☰';
  document.body.style.overflow=open ? 'hidden' : '';
}
function closeMobileMenu(){
  const nav=document.getElementById('primaryNav');
  const btn=document.getElementById('menuToggle');
  nav.classList.remove('show');
  btn.setAttribute('aria-expanded','false');
  btn.setAttribute('aria-label','Open navigation menu');
  btn.textContent='☰';
  document.body.style.overflow='';
}
document.addEventListener('keydown', function(e){ if(e.key==='Escape') closeMobileMenu(); });
document.addEventListener('click', function(e){
  const nav=document.getElementById('primaryNav');
  const btn=document.getElementById('menuToggle');
  if(nav && nav.classList.contains('show') && !nav.contains(e.target) && !btn.contains(e.target)) closeMobileMenu();
});
