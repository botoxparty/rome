---
title: Lint Rule jsx-a11y/anchorHasContent
layout: layouts/rule.liquid
description: MISSING DOCUMENTATION
eleventyNavigation:
	key: lint-rules/jsx-a11y/anchorHasContent
	parent: lint-rules
	title: jsx-a11y/anchorHasContent
---

# jsx-a11y/anchorHasContent

MISSING DOCUMENTATION

<!-- GENERATED:START(hash:ddf9ef9e24e89431d6381806fda8df1b280a2b59,id:main) Everything below is automatically generated. DO NOT MODIFY. Run `./rome run scripts/generated-files/lint-rules-docs` to update. -->
## Examples
### Invalid
{% raw %}<pre class="language-text"><code class="language-text">&lt;<span class="token attr-name">a</span> <span class="token operator">/</span>&gt;</code></pre>{% endraw %}
{% raw %}<pre class="language-text"><code class="language-text">
 <span style="text-decoration-style: dashed; text-decoration-line: underline;">file.jsx:1</span> <strong>lint/jsx-a11y/anchorHasContent</strong> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  <strong><span style="color: Tomato;">✖ </span></strong><span style="color: Tomato;">Provide screen reader accessible content when using </span><span style="color: Tomato;"><strong>anchor</strong></span><span style="color: Tomato;"> elements.</span>

    &lt;<span class="token attr-name">a</span> <span class="token operator">/</span>&gt;
    <span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span>

  <strong><span style="color: DodgerBlue;">ℹ </span></strong><span style="color: DodgerBlue;">All links on a page should have content that is accessible to screen</span>
    <span style="color: DodgerBlue;">readers.</span>

</code></pre>{% endraw %}

---------------

{% raw %}<pre class="language-text"><code class="language-text">&lt;<span class="token attr-name">a</span>&gt;&lt;<span class="token attr-name">TextWrapper</span> <span class="token attr-name">aria-hidden</span> <span class="token operator">/</span>&gt;&lt;<span class="token operator">/</span><span class="token attr-name">a</span>&gt;</code></pre>{% endraw %}
{% raw %}<pre class="language-text"><code class="language-text">
 <span style="text-decoration-style: dashed; text-decoration-line: underline;">file.jsx:1</span> <strong>lint/jsx-a11y/anchorHasContent</strong> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  <strong><span style="color: Tomato;">✖ </span></strong><span style="color: Tomato;">Provide screen reader accessible content when using </span><span style="color: Tomato;"><strong>anchor</strong></span><span style="color: Tomato;"> elements.</span>

    &lt;<span class="token attr-name">a</span>&gt;&lt;<span class="token attr-name">TextWrapper</span> <span class="token attr-name">aria-hidden</span> <span class="token operator">/</span>&gt;&lt;<span class="token operator">/</span><span class="token attr-name">a</span>&gt;
    <span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span>

  <strong><span style="color: DodgerBlue;">ℹ </span></strong><span style="color: DodgerBlue;">All links on a page should have content that is accessible to screen</span>
    <span style="color: DodgerBlue;">readers.</span>

</code></pre>{% endraw %}
### Valid
{% raw %}<pre class="language-text"><code class="language-text">&lt;<span class="token attr-name">a</span>&gt;Anchor Content!&lt;<span class="token operator">/</span><span class="token attr-name">a</span>&gt;</code></pre>{% endraw %}
{% raw %}<pre class="language-text"><code class="language-text">&lt;<span class="token attr-name">a</span>&gt;&lt;<span class="token attr-name">TextWrapper</span> <span class="token operator">/</span>&gt;&lt;<span class="token operator">/</span><span class="token attr-name">a</span>&gt;</code></pre>{% endraw %}
{% raw %}<pre class="language-text"><code class="language-text">&lt;<span class="token attr-name">a</span> <span class="token attr-name">dangerouslySetInnerHTML</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token variable">__html</span><span class="token punctuation">:</span> <span class="token string">&apos;foo&apos;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token operator">/</span>&gt;</code></pre>{% endraw %}
{% raw %}<pre class="language-text"><code class="language-text">&lt;<span class="token attr-name">a</span>&gt;&lt;<span class="token attr-name">TextWrapper</span> <span class="token attr-name">aria-hidden</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span> <span class="token operator">/</span>&gt; visible content&lt;<span class="token operator">/</span><span class="token attr-name">a</span>&gt;</code></pre>{% endraw %}
<!-- GENERATED:END(id:main) -->
