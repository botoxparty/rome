---
title: Lint Rule jsx-a11y/noNoninteractiveTabindex
layout: layouts/rule.liquid
description: MISSING DOCUMENTATION
eleventyNavigation:
	key: lint-rules/jsx-a11y/noNoninteractiveTabindex
	parent: lint-rules
	title: jsx-a11y/noNoninteractiveTabindex
---

# jsx-a11y/noNoninteractiveTabindex

MISSING DOCUMENTATION

<!-- GENERATED:START(hash:6a4fe5760b4a4620d752fa79c7cc0fbd33ec1693,id:main) Everything below is automatically generated. DO NOT MODIFY. Run `./rome run scripts/generated-files/lint-rules-docs` to update. -->
## Examples
### Invalid
{% raw %}<pre class="language-text"><code class="language-text">&lt;<span class="token attr-name">div</span> <span class="token attr-name">tabIndex</span><span class="token operator">=</span><span class="token string">&apos;0&apos;</span> &gt;&lt;<span class="token operator">/</span><span class="token attr-name">div</span>&gt;</code></pre>{% endraw %}
{% raw %}<pre class="language-text"><code class="language-text">
 <span style="text-decoration-style: dashed; text-decoration-line: underline;">file.tsx:1:5</span> <strong>lint/jsx-a11y/noNoninteractiveTabindex</strong> ━━━━━━━━━━━━━━━━━━━━━━

  <strong><span style="color: Tomato;">✖ </span></strong><span style="color: Tomato;">Do not use </span><span style="color: Tomato;"><strong>tabIndex</strong></span><span style="color: Tomato;"> on an element that is not interactive.</span>

    &lt;<span class="token attr-name">div</span> <span class="token attr-name">tabIndex</span><span class="token operator">=</span><span class="token string">&apos;0&apos;</span> &gt;&lt;<span class="token operator">/</span><span class="token attr-name">div</span>&gt;
         <span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span>

  <strong><span style="color: DodgerBlue;">ℹ </span></strong><span style="color: DodgerBlue;">Adding non-interactive elements to the keyboard navigation flow can</span>
    <span style="color: DodgerBlue;">confuse users.</span>

</code></pre>{% endraw %}

---------------

{% raw %}<pre class="language-text"><code class="language-text">&lt;<span class="token attr-name">div</span> <span class="token attr-name">role</span><span class="token operator">=</span><span class="token string">&apos;article&apos;</span> <span class="token attr-name">tabIndex</span><span class="token operator">=</span><span class="token string">&apos;0&apos;</span> &gt;&lt;<span class="token operator">/</span><span class="token attr-name">div</span>&gt;</code></pre>{% endraw %}
{% raw %}<pre class="language-text"><code class="language-text">
 <span style="text-decoration-style: dashed; text-decoration-line: underline;">file.tsx:1:5</span> <strong>lint/jsx-a11y/noNoninteractiveTabindex</strong> ━━━━━━━━━━━━━━━━━━━━━━

  <strong><span style="color: Tomato;">✖ </span></strong><span style="color: Tomato;">Do not use </span><span style="color: Tomato;"><strong>tabIndex</strong></span><span style="color: Tomato;"> on an element that is not interactive.</span>

    &lt;<span class="token attr-name">div</span> <span class="token attr-name">role</span><span class="token operator">=</span><span class="token string">&apos;article&apos;</span> <span class="token attr-name">tabIndex</span><span class="token operator">=</span><span class="token string">&apos;0&apos;</span> &gt;&lt;<span class="token operator">/</span><span class="token attr-name">div</span>&gt;
         <span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span>

  <strong><span style="color: DodgerBlue;">ℹ </span></strong><span style="color: DodgerBlue;">Adding non-interactive elements to the keyboard navigation flow can</span>
    <span style="color: DodgerBlue;">confuse users.</span>

</code></pre>{% endraw %}

---------------

{% raw %}<pre class="language-text"><code class="language-text">&lt;<span class="token attr-name">article</span> <span class="token attr-name">tabIndex</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span> <span class="token operator">/</span>&gt;</code></pre>{% endraw %}
{% raw %}<pre class="language-text"><code class="language-text">
 <span style="text-decoration-style: dashed; text-decoration-line: underline;">file.tsx:1:9</span> <strong>lint/jsx-a11y/noNoninteractiveTabindex</strong> ━━━━━━━━━━━━━━━━━━━━━━

  <strong><span style="color: Tomato;">✖ </span></strong><span style="color: Tomato;">Do not use </span><span style="color: Tomato;"><strong>tabIndex</strong></span><span style="color: Tomato;"> on an element that is not interactive.</span>

    &lt;<span class="token attr-name">article</span> <span class="token attr-name">tabIndex</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span> <span class="token operator">/</span>&gt;
             <span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span>

  <strong><span style="color: DodgerBlue;">ℹ </span></strong><span style="color: DodgerBlue;">Adding non-interactive elements to the keyboard navigation flow can</span>
    <span style="color: DodgerBlue;">confuse users.</span>

</code></pre>{% endraw %}
### Valid
{% raw %}<pre class="language-text"><code class="language-text">&lt;<span class="token attr-name">button</span> <span class="token attr-name">tabIndex</span><span class="token operator">=</span><span class="token string">&apos;0&apos;</span> &gt;&lt;<span class="token operator">/</span><span class="token attr-name">button</span>&gt;</code></pre>{% endraw %}
{% raw %}<pre class="language-text"><code class="language-text">&lt;<span class="token attr-name">span</span> <span class="token attr-name">role</span><span class="token operator">=</span><span class="token string">&apos;button&apos;</span> <span class="token attr-name">tabIndex</span><span class="token operator">=</span><span class="token string">&apos;0&apos;</span> &gt;&lt;<span class="token operator">/</span><span class="token attr-name">span</span>&gt;</code></pre>{% endraw %}
{% raw %}<pre class="language-text"><code class="language-text">&lt;<span class="token attr-name">span</span> <span class="token attr-name">role</span><span class="token operator">=</span><span class="token string">&apos;article&apos;</span> <span class="token attr-name">tabIndex</span><span class="token operator">=</span><span class="token string">&apos;-1&apos;</span> &gt;&lt;<span class="token operator">/</span><span class="token attr-name">span</span>&gt;</code></pre>{% endraw %}
{% raw %}<pre class="language-text"><code class="language-text">&lt;<span class="token attr-name">MyButton</span> <span class="token attr-name">tabIndex</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span> <span class="token operator">/</span>&gt;</code></pre>{% endraw %}
{% raw %}<pre class="language-text"><code class="language-text">&lt;<span class="token attr-name">article</span> <span class="token attr-name">tabIndex</span><span class="token operator">=</span><span class="token string">&apos;-1&apos;</span>&gt;&lt;<span class="token operator">/</span><span class="token attr-name">article</span>&gt;</code></pre>{% endraw %}
{% raw %}<pre class="language-text"><code class="language-text">&lt;<span class="token attr-name">div</span> <span class="token attr-name">tabIndex</span><span class="token operator">=</span><span class="token string">&apos;-1&apos;</span> &gt;&lt;<span class="token operator">/</span><span class="token attr-name">div</span>&gt;</code></pre>{% endraw %}
{% raw %}<pre class="language-text"><code class="language-text">&lt;<span class="token attr-name">article</span> <span class="token attr-name">tabIndex</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">}</span>&gt;&lt;<span class="token operator">/</span><span class="token attr-name">article</span>&gt;</code></pre>{% endraw %}
{% raw %}<pre class="language-text"><code class="language-text">&lt;<span class="token attr-name">div</span> <span class="token attr-name">tabIndex</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">}</span> &gt;&lt;<span class="token operator">/</span><span class="token attr-name">div</span>&gt;</code></pre>{% endraw %}
{% raw %}<pre class="language-text"><code class="language-text">&lt;<span class="token attr-name">div</span>&gt;&lt;<span class="token operator">/</span><span class="token attr-name">div</span>&gt;</code></pre>{% endraw %}
{% raw %}<pre class="language-text"><code class="language-text">&lt;<span class="token attr-name">button</span> <span class="token attr-name">tabindex</span><span class="token operator">=</span><span class="token string">&apos;-1&apos;</span>&gt;&lt;<span class="token operator">/</span><span class="token attr-name">button</span>&gt;</code></pre>{% endraw %}
<!-- GENERATED:END(id:main) -->
