// -------------------------
// NAVIGATION (sidebar + internal open)
// -------------------------
function navTo(e){
  const btn = e.currentTarget || e.target;
  document.querySelectorAll('.menu button').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');

  const t = btn.getAttribute('data-target');
  showSection(t);
  window.scrollTo({top:0,behavior:'smooth'});
}

function openPage(target){
  // support both 'regulation' and 'regNavPage' earlier calls
  showSection(target);
  // mark sidebar
  document.querySelectorAll('.menu button').forEach(b=>b.classList.remove('active'));
  const btn = document.querySelector(`.menu button[data-target="${target}"]`);
  if(btn) btn.classList.add('active');
}

function showSection(id){
  // hide all main sections
  const sections = ['home','regulation','dispute','projects'];
  sections.forEach(s => {
    const el = document.getElementById(s);
    if(el) el.style.display = (s === id ? 'block' : 'none');
  });
  // if id not in sections (e.g. 'regulation' exists), fallback to show regulation
  if(!sections.includes(id)){
    // nothing
  }
}

// -------------------------
// AUTH
// -------------------------
function doLogin(){
  const em = document.getElementById('email').value;
  const pw = document.getElementById('password').value;
  if(!em || !pw){ alert('Please enter email and password'); return; }
  // store basic flag (replace with real auth in production)
  localStorage.setItem('rra_logged_in','1');
  closeAuth();
}

function doSignup(){
  const name = document.getElementById('su_name').value;
  const em = document.getElementById('su_email').value;
  const pw = document.getElementById('su_password').value;
  if(!name || !em || !pw){ alert('Please complete all fields'); return; }
  // simple create: store email locally (demo only)
  localStorage.setItem('rra_logged_in','1');
  closeAuth();
}

function social(provider){
  alert('Social sign-in: ' + provider + ' (placeholder)');
}

function showSignup(){
  document.getElementById('signInView').style.display = 'none';
  document.getElementById('signupView').style.display = 'block';
}

function showSignin(){
  document.getElementById('signupView').style.display = 'none';
  document.getElementById('signInView').style.display = 'block';
}

function closeAuth(){
  document.getElementById('auth').style.display = 'none';
  document.getElementById('app').style.display = 'grid';
  // show default section (home)
  showSection('home');
  // ensure sidebar active
  document.querySelectorAll('.menu button').forEach(b=>b.classList.remove('active'));
  document.querySelector('.menu button[data-target="home"]').classList.add('active');
}

function logout(){
  localStorage.removeItem('rra_logged_in');
  // show auth modal again
  document.getElementById('auth').style.display = 'flex';
  document.getElementById('app').style.display = 'none';
}

// -------------------------
// PARTS NAVIGATION
// -------------------------
// === UPDATE THIS FUNCTION ===
// Replace your old openPart() function with this one
function openPart(p){
  switch(p){
    case 'B':
      window.location.href = 'part-b.html';
      break;
    case 'F':
      window.location.href = 'part-f.html';
      break;
    case 'L':
      window.location.href = 'part-l.html';
      break;
    case 'O':
      window.location.href = 'part-o.html';
      break;
    default:
      alert('Open Part ' + p);
  }
}

// -------------------------
// CLAUSE ACTION (prototype)
// -------------------------
function openClause(){
  alert('Opening selected clause (prototype)');
}

// -------------------------
// STARTUP: SHOW AUTH IF NOT LOGGED IN
// -------------------------
window.addEventListener('load', () => {
  const logged = localStorage.getItem('rra_logged_in');
  if(logged){
    // user already logged in — hide auth and show app
    document.getElementById('auth').style.display = 'none';
    document.getElementById('app').style.display = 'grid';
    showSection('home');
  } else {
    // show auth modal
    document.getElementById('auth').style.display = 'flex';
    document.getElementById('app').style.display = 'none';
  }
});

// -------------------------
// Dispute Navigator Q&A + Tabs
// -------------------------
function selectAnswer(btn){
  document.querySelectorAll('.qa-box button').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
}

function switchTab(tab){
  // Tabs
  document.querySelectorAll('.tabs button').forEach(b=>b.classList.remove('active'));
  document.getElementById(tab + '-btn').classList.add('active');
  // Sections
  document.querySelectorAll('.section').forEach(s=>s.classList.remove('active'));
  document.getElementById(tab).classList.add('active');
}
