const guides = [
  {
    id: 'quick', icon: '⌁', short: 'Quick start', room: 'VPS starters', duration: '5 STEPS',
    steps: [
      { title: 'Get your server details', who: 'ClawGuide', text: 'First, find the VPS you want to connect to in your Contabo account. Note its public IPv4 address and the login method you set up. Keep credentials private; this page never needs your password or private key.', tip: 'Use a placeholder while learning. Never paste a real password or private key into a chat.', actions: [{ label: 'Show me the connection command', go: 1 }, { label: 'Why use a placeholder?', modal: 'placeholder' }] },
      { title: 'Open a terminal on Android', who: 'Guide', text: 'Use a terminal app you trust. Termux is an open-source terminal environment for Android. Install it only from its official project sources, then open it and let the first setup finish.', code: 'Open Termux → wait for the prompt', codeLabel: 'ANDROID', tip: 'You can also use a reputable SSH client app if you prefer a graphical connection screen.', actions: [{ label: 'Install OpenSSH in Termux', go: 2 }, { label: 'Open Termux project ↗', url: 'https://termux.dev/en/' }] },
      { title: 'Install the SSH client', who: 'ClawGuide', text: 'In Termux, install the OpenSSH client package. Read the command before running it; it updates package metadata and installs the SSH tools on your phone.', code: 'pkg update && pkg install openssh', codeLabel: 'TERMUX COMMAND', tip: 'If prompted to continue, review the package list and confirm inside Termux.', actions: [{ label: 'Connect to the VPS', go: 3 }, { label: 'Copy command', copy: 'pkg update && pkg install openssh' }] },
      { title: 'Connect with SSH', who: 'Guide', text: 'Replace the placeholder with your VPS IP address. If your server uses a different login name, replace root with that account. The first connection may ask you to trust the host key; verify the fingerprint through a trusted channel before accepting.', code: 'ssh root@<VPS_IP>', codeLabel: 'CONNECTION TEMPLATE', tip: 'Do not include a password in the command. SSH will prompt securely, or you can configure key-based login.', actions: [{ label: 'Check I’m on the server', go: 4 }, { label: 'Copy template', copy: 'ssh root@<VPS_IP>' }] },
      { title: 'Confirm and make it yours', who: 'ClawGuide', text: 'After login, confirm which account and host you reached. This is a read-only check. Before hosting anything important, create a non-root user, set up key-based authentication, and keep a recovery path.', code: 'whoami && hostname', codeLabel: 'READ-ONLY CHECK', tip: 'Disconnect with exit. A VPS is a remote computer; only run software you understand and intend to maintain.', actions: [{ label: 'Explore SSH security', guide: 'secure', step: 0 }, { label: 'Explore the bot path', guide: 'bot', step: 0 }] }
    ]
  },
  {
    id: 'secure', icon: '⌑', short: 'SSH, made safer', room: 'SSH & good habits', duration: '4 STEPS',
    steps: [
      { title: 'Know which account you use', who: 'ClawGuide', text: 'For a long-lived server, avoid doing routine work as root. Create a named account with only the permissions it needs, and keep a separate way to recover administrator access.', code: 'whoami', codeLabel: 'CHECK THE CURRENT ACCOUNT', tip: 'Do not change SSH settings until you have confirmed a second working login.' },
      { title: 'Use a key, not a pasted secret', who: 'Guide', text: 'SSH keys let your phone prove its identity without sending a reusable password for every connection. Generate a key in your SSH client and install only the public key on the server. Never share the private key.', code: 'ssh-keygen -t ed25519', codeLabel: 'KEY GENERATION EXAMPLE', tip: 'Protect the private key with a passphrase and keep a backup in a secure password manager.' },
      { title: 'Check before changing config', who: 'ClawGuide', text: 'Before editing sshd settings, read the current configuration and make sure your account has working key access. Keep your current session open while testing a new one.', code: 'sudo sshd -t', codeLabel: 'CONFIG VALIDATION', tip: 'Do not disable password login until key login has been tested in a second terminal.' },
      { title: 'Keep a recovery route', who: 'Guide', text: 'Record where your provider exposes the emergency console, keep packages updated, and review login logs when you operate the server. Security is a habit, not a one-click setting.', actions: [{ label: 'Back to quick start', guide: 'quick', step: 0 }, { label: 'What can I automate?', guide: 'ideas', step: 0 }] }
    ]
  },
  {
    id: 'bot', icon: '✳', short: 'Clawbot path', room: 'Clawbot workshop', duration: '5 STEPS',
    steps: [
      { title: 'Decide what the bot should do', who: 'ClawGuide', text: 'Start with one small job: answer a narrow set of questions, post a reminder, or summarize information you provide. Write down who can trigger it, what data it can see, and when a person must review its output.', tip: 'Do not give a bot broad server, account, or payment access just to make a demo work.' },
      { title: 'Identify the project first', who: 'Guide', text: '“Clawbot” can refer to different projects. Check the exact repository, official setup instructions, supported runtime, and license before installing anything. Avoid copy-pasting commands from an unverified tutorial.', actions: [{ label: 'Open GitHub search ↗', url: 'https://github.com/search?q=clawbot&type=repositories' }, { label: 'What should I verify?', modal: 'repository' }] },
      { title: 'Prepare a contained runtime', who: 'ClawGuide', text: 'Use a dedicated non-root Linux account, a separate working directory, and only the outbound network access the bot needs. Store tokens in a server-side secret store or protected environment file, never in source code or chat.', code: 'mkdir -p ~/apps/clawbot', codeLabel: 'EXAMPLE WORKSPACE', tip: 'This example only creates a directory in your shell. Review ownership and permissions for your actual setup.' },
      { title: 'Configure the smallest access', who: 'Guide', text: 'Create a bot token only through the official provider flow. Limit who can message the bot, restrict channel permissions, and avoid mounting your whole home folder into a container. Start with a test account.', tip: 'A token shown in a terminal can end up in logs or screenshots. Redact it before sharing diagnostics.' },
      { title: 'Run, observe, and update', who: 'ClawGuide', text: 'Use the project’s official deployment method, then check its logs, restart behavior, backups, and update policy. Add one capability at a time. Keep a human approval step for messages or actions that affect other people.', actions: [{ label: 'Open Script Lab', guide: 'scripts', step: 0 }, { label: 'Explore automation ideas', guide: 'ideas', step: 0 }, { label: 'Review SSH basics', guide: 'secure', step: 0 }] }
    ]
  },
  {
    id: 'ideas', icon: '↗', short: 'Next experiments', room: 'Ideas & experiments', duration: '3 IDEAS',
    steps: [
      { title: 'Automate one boring task', who: 'ClawGuide', text: 'A useful first experiment is a scheduled disk-space report, a backup reminder, or a health-check summary. Make it read-only, send output only to you, and add an alert if a check fails.', tip: 'Automations need monitoring too: decide who gets notified when the job stops.' },
      { title: 'Build a tiny AI helper', who: 'Guide', text: 'Try a helper that summarizes a document you choose or drafts a response for your review. Define what data is allowed, measure whether it saves time, and keep sensitive data out unless you have reviewed the provider and retention settings.', actions: [{ label: 'Return to the Clawbot path', guide: 'bot', step: 0 }] },
      { title: 'Test a real problem before monetizing', who: 'ClawGuide', text: 'Pick a specific audience and problem, speak with potential users, and test a small prototype before spending on infrastructure. Hosting or automation alone does not guarantee income. Estimate costs, support time, legal requirements, and demand before charging anyone.', tip: 'Treat revenue as uncertain; validate willingness to pay before building a business around it.', actions: [{ label: 'Start with SSH basics', guide: 'quick', step: 0 }, { label: 'Review secure practices', guide: 'secure', step: 0 }] }
    ]
  },
  {
    id: 'scripts', icon: '⌘', short: 'Script lab', room: 'Clawbot automation lab', duration: '4 STEPS',
    steps: [
      { title: 'Give the script one clear job', who: 'ClawGuide', text: 'Write down the trigger, expected inputs, allowed effect, and what should happen on failure. Start with a read-only check. Name events explicitly, and never turn free-form webhook text into a shell command.', code: "const allowedEvents = new Set(['server.disk.check', 'clawbot.summary.draft']);", codeLabel: 'EVENT ALLOWLIST', tip: 'A payload is input from outside your program. Validate every field and ignore event types you did not subscribe to.' },
      { title: 'Try a read-only health script', who: 'Guide', text: 'This Bash template reports root-disk usage as JSON. It does not send data over the network or change server state. Save it as a script only after reviewing each command and the target host.', code: `#!/usr/bin/env bash\nset -euo pipefail\n\ndisk_used=$(df -P / | awk 'NR == 2 { sub(/%$/, "", $5); print $5 }')\nif [[ ! "$disk_used" =~ ^[0-9]+$ ]]; then\n  echo "Unable to read disk usage" >&2\n  exit 1\nfi\nhost=$(hostname -s | tr -cd '[:alnum:]._-')\nprintf '{"event":"clawbot.health.summary","host":"%s","disk_used_percent":%s}' "$host" "$disk_used"`, codeLabel: 'READ-ONLY BASH TEMPLATE', tip: 'Run it manually first under a dedicated non-root account. Set a threshold and alert destination only after you understand what the output contains.' },
      { title: 'Route only approved actions', who: 'ClawGuide', text: 'Map known event names to fixed functions. Do not use eval, construct a shell command from a payload, or let a webhook choose an arbitrary file path. Keep the action narrow and reviewable.', code: `const handlers = new Map([\n  ['server.disk.check', async () => checkDiskSpace()],\n  ['clawbot.summary.draft', async (event) => draftForReview(event.summary)]\n]);\n\nconst handler = handlers.get(event.type);\nif (!handler) return { status: 'ignored' };\nreturn handler(event);`, codeLabel: 'FIXED HANDLER MAP', tip: 'Validate type and length for every field before passing it to a handler. A draft or preview is safer than an automatic external action.' },
      { title: 'Run it with limits and logs', who: 'Guide', text: 'Schedule one task at a time, use a dedicated account with only the required file and network access, and add a timeout. Keep secrets outside source control; redact payloads and tokens from logs. Add a pause switch and an alert for failures.', actions: [{ label: 'Continue to webhook setup', guide: 'webhooks', step: 0 }, { label: 'Explore automation ideas', guide: 'ideas', step: 0 }] }
    ]
  },
  {
    id: 'webhooks', icon: '↻', short: 'Webhook guide', room: 'Webhook integration', duration: '6 STEPS',
    steps: [
      { title: 'Define a small HTTPS endpoint', who: 'ClawGuide', text: 'Use a dedicated HTTPS path that accepts only the method and event types you need. Cap request size, validate JSON fields, and keep secrets out of the URL. Subscribe to the minimum set of events so an incoming delivery cannot trigger an unrestricted Clawbot command.', tip: 'A webhook is a request from another service, not proof that the sender is trusted. Authenticate it before processing the payload.', actions: [{ label: 'GitHub webhook best practices ↗', url: 'https://docs.github.com/en/webhooks/using-webhooks/best-practices-for-using-webhooks' }] },
      { title: 'Choose the provider’s verification scheme', who: 'Guide', text: 'There is no universal webhook signature format. GitHub signs the raw body with HMAC-SHA256 and sends X-Hub-Signature-256. Shopify uses its own HMAC header and Base64 digest. Telegram Bot API can send a configured secret in X-Telegram-Bot-Api-Secret-Token; that is a shared-secret header, not the GitHub HMAC format.', tip: 'Keep the exact provider secret in a server-side environment variable. Never paste it into this chat, the webhook URL, a screenshot, or your repository.', actions: [{ label: 'GitHub verification ↗', url: 'https://docs.github.com/en/webhooks/using-webhooks/validating-webhook-deliveries' }, { label: 'Shopify verification ↗', url: 'https://shopify.dev/docs/apps/build/webhooks/verify-deliveries' }, { label: 'Telegram setWebhook ↗', url: 'https://core.telegram.org/bots/api/methods/setwebhook' }] },
      { title: 'Verify a GitHub-style HMAC', who: 'ClawGuide', text: 'For GitHub deliveries, verify the signature against the exact raw request bytes before parsing JSON. This example is for GitHub’s sha256= hex format only. It is not a drop-in verifier for Telegram, Shopify, or another provider.', code: `import { createHmac, timingSafeEqual } from 'node:crypto';\n\nexport function verifyGitHubSignature(rawBody, header, secret) {\n  if (typeof header !== 'string' || !secret) return false;\n  const match = /^sha256=([a-f0-9]{64})$/i.exec(header);\n  if (!match) return false;\n  const expected = createHmac('sha256', secret).update(rawBody).digest();\n  const received = Buffer.from(match[1], 'hex');\n  return received.length === expected.length && timingSafeEqual(received, expected);\n}`, codeLabel: 'NODE.JS · GITHUB FORMAT', tip: 'Capture rawBody before JSON middleware changes it. Check lengths before timingSafeEqual; Node requires equal-length byte buffers.', actions: [{ label: 'GitHub signature docs ↗', url: 'https://docs.github.com/en/webhooks/using-webhooks/validating-webhook-deliveries' }, { label: 'Node.js crypto docs ↗', url: 'https://nodejs.org/api/crypto.html' }] },
      { title: 'Handle Telegram’s secret header', who: 'Guide', text: 'When configuring Telegram setWebhook, its optional secret_token is returned in X-Telegram-Bot-Api-Secret-Token. Compare that header with your server-side expected value, reject missing or mismatched values, and do not confuse this check with a signed payload HMAC.', code: `import { timingSafeEqual } from 'node:crypto';\n\nexport function telegramSecretMatches(received, expected = process.env.TELEGRAM_WEBHOOK_SECRET) {\n  if (typeof received !== 'string' || typeof expected !== 'string' || !expected) return false;\n  const actualBytes = Buffer.from(received, 'utf8');\n  const expectedBytes = Buffer.from(expected, 'utf8');\n  return actualBytes.length === expectedBytes.length && timingSafeEqual(actualBytes, expectedBytes);\n}`, codeLabel: 'NODE.JS · TELEGRAM HEADER', tip: 'Generate a high-entropy secret that matches Telegram’s allowed characters. Keep it private and use HTTPS.', actions: [{ label: 'Telegram setWebhook docs ↗', url: 'https://core.telegram.org/bots/api/methods/setwebhook' }] },
      { title: 'Deduplicate and queue safely', who: 'ClawGuide', text: 'Providers retry deliveries. Verify the signature first, then store a provider delivery ID with a unique constraint so the same delivery cannot perform an action twice. Persist or enqueue the work durably, acknowledge promptly, and let a worker execute the allowlisted handler. Make the handler idempotent too.', code: `const deliveryId = request.headers['x-github-delivery'];\nif (typeof deliveryId !== 'string') return reply.code(400).send();\n\n// Persist once under a unique deliveryId, then enqueue the durable work item.\nawait inbox.acceptOnce({ deliveryId, eventType, validatedPayload });\nreturn reply.code(202).send();`, codeLabel: 'IDEMPOTENT INBOX · PSEUDOCODE', tip: 'Use the delivery ID header documented by your provider. Do not assume every provider uses the same header or retry policy.', actions: [{ label: 'GitHub delivery best practices ↗', url: 'https://docs.github.com/en/webhooks/using-webhooks/best-practices-for-using-webhooks' }, { label: 'Shopify duplicate-delivery notes ↗', url: 'https://shopify.dev/docs/apps/build/webhooks/verify-deliveries' }] },
      { title: 'Test rejection, retries, and recovery', who: 'ClawGuide', text: 'Use a test endpoint and synthetic payloads. Check that a valid request is accepted, an invalid signature is rejected, malformed or oversized JSON is rejected, unknown events do nothing, and a duplicate delivery is harmless. Review logs without secrets, then test your provider’s redelivery and endpoint recovery flow.', tip: 'Rotate a secret if it leaks. Recheck provider delivery history and keep a documented way to pause the integration.', actions: [{ label: 'Back to Script Lab', guide: 'scripts', step: 0 }, { label: 'Review Clawbot setup', guide: 'bot', step: 0 }] }
    ]
  }
];

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const state = { guideId: 'quick', step: 0, collapsed: false, mobileView: 'guides', toastTimer: null };
const saved = (() => { try { return JSON.parse(localStorage.getItem('clawguide-state') || '{}'); } catch { return {}; } })();
const guideFor = (id = state.guideId) => guides.find(guide => guide.id === id) || guides[0];
const escapeHtml = value => String(value).replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character]));

function saveState() {
  try { localStorage.setItem('clawguide-state', JSON.stringify({ guideId: state.guideId, step: state.step, theme: document.body.dataset.theme || 'moss', seen: state.seen || {} })); } catch { /* private browsing may block storage */ }
}
function toast(message) {
  const element = $('#toast');
  element.textContent = message;
  element.classList.add('is-visible');
  clearTimeout(state.toastTimer);
  state.toastTimer = setTimeout(() => element.classList.remove('is-visible'), 2300);
}
function renderNavigation() {
  const nav = $('#guide-nav');
  const switcher = $('#guide-switcher');
  nav.innerHTML = guides.map(guide => `<button data-guide="${guide.id}" class="${guide.id === state.guideId ? 'is-active' : ''}"><span class="nav-glyph">${guide.icon}</span><span class="nav-title">${escapeHtml(guide.short)}</span><span class="nav-count">${String(guide.steps.length).padStart(2, '0')}</span></button>`).join('');
  switcher.innerHTML = guides.map(guide => `<button class="guide-chip ${guide.id === state.guideId ? 'is-active' : ''}" data-guide="${guide.id}"><span class="chip-dot"></span>${escapeHtml(guide.short)}</button>`).join('');
}
function messageMarkup({ who = 'ClawGuide', text = '', code, codeLabel = 'COMMAND', tip, actions = [], user = false, time = 'now' }) {
  const avatar = user ? '<span class="avatar avatar-you">Y</span>' : `<span class="avatar ${who === 'Guide' ? 'avatar-guide' : 'avatar-bot'}">${who === 'Guide' ? '⌘' : '✳'}</span>`;
  const codeMarkup = code ? `<div class="code-block"><div class="code-label">${escapeHtml(codeLabel)}</div><code>${escapeHtml(code)}</code><button class="copy-code" data-copy="${escapeHtml(code)}" aria-label="Copy command">Copy</button></div>` : '';
  const tipMarkup = tip ? `<div class="message-tip"><p>✳ &nbsp;${escapeHtml(tip)}</p></div>` : '';
  const actionMarkup = actions.length ? `<div class="message-actions">${actions.map(action => {
    if (action.go !== undefined) return `<button class="action-pill" data-step="${action.go}">${escapeHtml(action.label)} <span>→</span></button>`;
    if (action.guide) return `<button class="action-pill" data-select-guide="${action.guide}" data-select-step="${action.step || 0}">${escapeHtml(action.label)} <span>→</span></button>`;
    if (action.copy) return `<button class="action-pill secondary" data-copy="${escapeHtml(action.copy)}">${escapeHtml(action.label)}</button>`;
    if (action.url) return `<a class="action-pill secondary" href="${escapeHtml(action.url)}" target="_blank" rel="noreferrer">${escapeHtml(action.label)}</a>`;
    if (action.modal) return `<button class="action-pill secondary" data-modal="${escapeHtml(action.modal)}">${escapeHtml(action.label)}</button>`;
    return '';
  }).join('')}</div>` : '';
  return `<article class="message ${user ? 'from-user' : ''}">${avatar}<div class="bubble"><div class="bubble-head"><strong>${user ? 'You' : escapeHtml(who)}</strong><time>${time}</time></div><p>${escapeHtml(text)}</p>${codeMarkup}${tipMarkup}${actionMarkup}<div class="message-foot">${user ? 'SENT' : 'FIELD NOTE'} &nbsp;·&nbsp; ${user ? '✓✓' : '●'}</div></div></article>`;
}
function renderCurrentGuide(announce = false) {
  const guide = guideFor();
  state.step = Math.max(0, Math.min(state.step, guide.steps.length - 1));
  const step = guide.steps[state.step];
  const hasNextAction = step.actions?.some(action => action.go !== undefined);
  const message = { ...step, actions: [...(step.actions || []), ...(state.step < guide.steps.length - 1 && !hasNextAction ? [{ label: 'Next step', go: state.step + 1 }] : [])] };
  $('#breadcrumb-title').textContent = guide.short;
  $('#room-title').textContent = guide.room;
  $('#messages').innerHTML = messageMarkup(message);
  $('#chat-scroll').scrollTop = $('#chat-scroll').scrollHeight;
  renderNavigation();
  renderProgress();
  renderStepList();
  if (announce) $('#messages').setAttribute('aria-label', `${guide.short}, step ${state.step + 1}: ${step.title}`);
  saveState();
}
function renderProgress() {
  const guide = guideFor();
  const completed = state.step;
  const percent = Math.round(completed / guide.steps.length * 100);
  $('#progress-value').textContent = `${percent}%`;
  $('#progress-bar').style.width = `${percent}%`;
  $('#progress-ring').style.background = `conic-gradient(var(--accent) ${percent}%, #343b32 ${percent}%)`;
  $('#progress-title').textContent = completed === 0 ? 'A fresh start' : completed >= guide.steps.length - 1 ? 'Nearly there' : 'Nice momentum';
  $('#progress-caption').textContent = completed === 0 ? 'Pick up whenever you’re ready.' : `${guide.short} is in progress.`;
  $('#step-count').textContent = `${completed} of ${guide.steps.length} steps`;
}
function renderStepList() {
  const guide = guideFor();
  const list = $('#step-list');
  list.classList.toggle('step-collapsed', state.collapsed);
  list.innerHTML = guide.steps.map((step, index) => `<button class="step-row ${index === state.step ? 'is-current' : ''} ${index < state.step ? 'is-done' : ''}" data-step="${index}"><span class="step-number">${index < state.step ? '✓' : String(index + 1).padStart(2, '0')}</span><span class="step-name">${escapeHtml(step.title)}</span></button>`).join('');
}
function setStep(index) {
  const guide = guideFor();
  if (index < 0 || index >= guide.steps.length) return;
  state.step = index;
  state.seen ||= {};
  state.seen[guide.id] = Math.max(state.seen[guide.id] || 0, index);
  renderCurrentGuide(true);
}
function selectGuide(id, step = 0) {
  if (!guideFor(id)) return;
  state.guideId = id;
  state.step = step;
  renderCurrentGuide(true);
  if (window.innerWidth <= 700) showMobileView('chat');
}
function showModal(id) {
  const content = {
    placeholder: ['A note on placeholders', 'Use a placeholder in examples so you do not accidentally publish server details in a screenshot. Your real IP belongs only in the SSH client you choose to use. This guide does not collect or store your server address.'],
    repository: ['Check the source before install', 'Confirm the exact project name, repository owner, release history, documentation domain, install steps, required permissions, and how updates are signed or published. If the instructions ask you to paste a token into a public chat or run an opaque root script, stop and investigate.'],
    principle: ['Understand first. Automate second.', 'A command on a remote server can change real systems. This field guide shows examples and explains their intent, but it never sends commands to your VPS. Confirm the target, permissions, and rollback plan before running anything.'],
    help: ['A small field guide, not a remote console', 'Choose a topic, move through the steps, and copy a command only after you have reviewed it. Use the official links for current provider or software instructions. The built-in hints are scripted examples, not a live AI assistant.'],
    automation: ['Quick actions', 'Try the SSH safety checklist, open Script Lab for safe templates, or explore the webhook integration guide. Keep every automation narrow, observable, and easy to switch off.']
  }[id] || ['Field note', 'Explore the guide and use placeholders for private details.'];
  $('#modal-kicker').textContent = id === 'help' ? 'HOW TO USE THIS' : 'FIELD NOTE / SAFETY';
  $('#modal-title').textContent = content[0];
  $('#modal-copy').textContent = content[1];
  $('#info-modal').showModal();
}
async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    toast('Copied to clipboard — review before running.');
  } catch {
    const area = document.createElement('textarea');
    area.value = text; area.style.position = 'fixed'; area.style.opacity = '0'; document.body.append(area); area.select();
    const ok = document.execCommand('copy'); area.remove(); toast(ok ? 'Copied to clipboard — review before running.' : 'Could not copy. Select the command manually.');
  }
}
function replyToQuestion() {
  const input = $('#question-input');
  const question = input.value.trim();
  if (!question) { toast('Type a topic to get a built-in hint.'); return; }
  $('#messages').insertAdjacentHTML('beforeend', messageMarkup({ text: question, user: true }));
  input.value = '';
  const typing = $('#typing-indicator');
  typing.hidden = false;
  $('#chat-scroll').scrollTop = $('#chat-scroll').scrollHeight;
  setTimeout(() => {
    typing.hidden = true;
    const lower = question.toLowerCase();
    let response = 'This page uses scripted hints, not a live AI. Try “SSH”, “Termux”, “key”, “Clawbot”, “automation”, or “webhook”, or pick one of the guide buttons.';
    if (/ssh|connect|login|terminal/.test(lower)) response = 'For SSH, first install or open a trusted client, then connect with a placeholder such as ssh root@<VPS_IP>. Verify the host fingerprint through a trusted channel. Never paste a private key or password here.';
    else if (/termux|android|phone/.test(lower)) response = 'On Android, use the official Termux project sources or a reputable SSH client. In Termux, install OpenSSH with pkg update && pkg install openssh. Review commands before running them.';
    else if (/key|secure|password|root/.test(lower)) response = 'Prefer a protected SSH key and a dedicated non-root account for routine work. Test key login in a second session before changing SSH settings, and keep a provider recovery console available.';
    else if (/claw|bot|repo/.test(lower)) response = '“Clawbot” can mean different repositories. Verify the exact project owner, docs, license, release history, and permissions before installation. Use a dedicated account and narrowly scoped secrets.';
    else if (/money|earn|moneti|revenue|business/.test(lower)) response = 'There is no guaranteed income from a VPS or bot. Validate a real customer problem, test willingness to pay, and account for hosting, support, compliance, and maintenance costs.';
    else if (/internet|network|online/.test(lower)) response = 'The Internet check only tests whether this browser can reach a public endpoint. It does not test your VPS network, firewall, DNS, or SSH port. Use your provider console and server-side diagnostics for those.';
    else if (/webhook|signature|hmac|telegram/.test(lower)) response = 'Open Webhook guide for provider-specific verification examples. Verify a signature before parsing or acting on a payload, keep secrets server-side, and use a durable delivery ID to make retries safe.';
    else if (/automation|schedule|cron/.test(lower)) response = 'Open Script Lab for a copyable read-only health-check template. Keep scripts narrowly scoped, validate inputs, and do not turn webhook text into shell commands.';
    $('#messages').insertAdjacentHTML('beforeend', messageMarkup({ text: response, who: 'ClawGuide', time: 'just now' }));
    $('#chat-scroll').scrollTop = $('#chat-scroll').scrollHeight;
  }, 500);
}
function showMobileView(view) {
  state.mobileView = view;
  const shell = $('.app-shell');
  shell.classList.toggle('inspector-mode', view === 'progress' || view === 'themes');
  if (view === 'themes') $('.theme-section').scrollIntoView({ behavior: 'smooth', block: 'center' });
  if (view === 'progress') $('.progress-card').scrollIntoView({ behavior: 'smooth', block: 'start' });
  $$('.mobile-nav-item').forEach(button => button.classList.toggle('is-active', button.dataset.mobileView === view));
}

if (saved.theme) document.body.dataset.theme = saved.theme;
state.guideId = guides.some(guide => guide.id === saved.guideId) ? saved.guideId : 'quick';
state.step = Math.min(Number(saved.step) || 0, guideFor(state.guideId).steps.length - 1);
state.seen = saved.seen || {};
$$('.theme-choice').forEach(button => {
  button.classList.toggle('is-active', button.dataset.theme === (saved.theme || 'moss'));
  button.addEventListener('click', () => {
    document.body.dataset.theme = button.dataset.theme;
    $$('.theme-choice').forEach(choice => choice.classList.toggle('is-active', choice === button));
    saveState(); toast(`${button.dataset.theme[0].toUpperCase()}${button.dataset.theme.slice(1)} theme applied.`);
  });
});
renderCurrentGuide();

document.addEventListener('click', event => {
  const copy = event.target.closest('[data-copy]');
  if (copy) { copyText(copy.dataset.copy); return; }
  const action = event.target.closest('[data-select-guide]');
  if (action) { selectGuide(action.dataset.selectGuide, Number(action.dataset.selectStep || 0)); return; }
  const modal = event.target.closest('[data-modal]');
  if (modal) { showModal(modal.dataset.modal); return; }
  const step = event.target.closest('[data-step]');
  if (step) { setStep(Number(step.dataset.step)); return; }
  const guide = event.target.closest('[data-guide]');
  if (guide) selectGuide(guide.dataset.guide);
});
$('#send-question').addEventListener('click', replyToQuestion);
$('#question-input').addEventListener('keydown', event => { if (event.key === 'Enter') replyToQuestion(); });
$('#reset-progress').addEventListener('click', () => { state.step = 0; state.seen[guideFor().id] = 0; renderCurrentGuide(); toast('Progress reset for this guide.'); });
$('#toggle-steps').addEventListener('click', event => { state.collapsed = !state.collapsed; renderStepList(); event.currentTarget.textContent = state.collapsed ? '+' : '−'; });
$('#open-help').addEventListener('click', () => showModal('help'));
$('#show-principle').addEventListener('click', () => showModal('principle'));
$('#close-modal').addEventListener('click', () => $('#info-modal').close());
$('#modal-confirm').addEventListener('click', () => $('#info-modal').close());
$('#composer-plus').addEventListener('click', () => showModal('automation'));
$('#room-menu').addEventListener('click', () => showModal('help'));
$('#inspector-menu').addEventListener('click', () => toast('Progress is saved on this device only.'));
$('#internet-check').addEventListener('click', async () => {
  const button = $('#internet-check');
  const label = $('.tool-label', button);
  const original = label.textContent;
  label.textContent = 'Checking…';
  try {
    await fetch('https://www.google.com/generate_204', { mode: 'no-cors', cache: 'no-store', signal: AbortSignal.timeout(5000) });
    toast('This browser can reach the internet. VPS connectivity is not tested.');
  } catch {
    toast('Could not confirm internet access from this browser.');
  } finally { label.textContent = original; }
});
$$('.mobile-nav-item').forEach(button => button.addEventListener('click', () => showMobileView(button.dataset.mobileView)));
window.addEventListener('resize', () => { if (window.innerWidth > 700) $('.app-shell').classList.remove('inspector-mode'); });
