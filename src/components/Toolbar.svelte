<script lang="ts">
    import {Toolbar, IconChatBubbleOutline, IconThumbUp, IconShare} from "@papyrs/ui";
    import { share } from "../services/share.services";
</script>

<Toolbar>
    <button class="icon"><IconThumbUp /></button>
    <button class="icon like"><IconChatBubbleOutline /></button>
    <button class="icon" aria-label="Share" on:click={share}><IconShare /></button>
</Toolbar>

<style lang="scss">
    button {
      height: 100%;
      padding: 0.45rem 0.75rem;
    }

    .like {
      padding-top: 0.85rem;
    }
</style>