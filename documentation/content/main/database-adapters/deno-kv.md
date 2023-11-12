---
title: "Deno KV adapter"
description: "Learn how to use Deno KV with Lucia"
---

Adapter for [Deno KV](deno.com/kv)

```ts
import denoKV from "https://deno.land/x/lucia_kv@0.1.2/mod.ts";
```

```ts
const kv: (
	database: Deno.Kv,
	options?: Partial<{
		onDelete(
			tx: Deno.AtomicOperation,
			user_id: string,
		): Promise<void> | void
		authPrefix: Deno.KvKeyPart[]
		prefixes: {
			user: Deno.KvKeyPart[]
			session: Deno.KvKeyPart[]
			key: Deno.KvKeyPart[]
			key_user: Deno.KvKeyPart[]
			user_sessions: Deno.KvKeyPart[]
			user_keys: Deno.KvKeyPart[]
			session_user: Deno.KvKeyPart[]
		}
	}>,
) => InitializeAdapter<Adapter>
```

