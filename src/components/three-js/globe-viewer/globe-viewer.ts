import { LitElement, html, css, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

@customElement('globe-viewer')
export class GlobeViewer extends LitElement {
  static styles = css`
    :host {
      display: block;
      width: 100%;
      height: 150px;
      background-color: inherit;
      position: relative;
    }

    .renderer-container {
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
  `;

  private _scene!: THREE.Scene;
  private _camera!: THREE.PerspectiveCamera;
  private _renderer!: THREE.WebGLRenderer;
  private _globe!: THREE.Mesh;
  private _controls!: OrbitControls;

  connectedCallback(): void {
    super.connectedCallback();
    window.addEventListener('resize', this.onWindowResize);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    window.removeEventListener('resize', this.onWindowResize);
    this._renderer?.dispose();
  }

  firstUpdated(): void {
    this.initScene();
    this.updateRendererSize();
    this.startRenderLoop();
  }

  private onWindowResize = (): void => {
    this.updateRendererSize();
  };

  private initScene(): void {
    const container = this.shadowRoot!.querySelector(
      '.renderer-container'
    ) as HTMLDivElement;
    // Create the scene
    this._scene = new THREE.Scene();

    // Set up the camera
    this._camera = new THREE.PerspectiveCamera(90, 1, 0.1, 1000);
    this._camera.position.z = 14;
    this._camera.position.set(0, 0, 5);

    // Create the renderer
    this._renderer = new THREE.WebGLRenderer({ alpha: true });
    this._renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(this._renderer.domElement);

    // Create a sphere (the globe)
    const sphereGeometry = new THREE.SphereGeometry(3, 10, 10);
    const globeMaterial = new THREE.MeshBasicMaterial({
      color: 0x0077ff,
      wireframe: true,
    });
    this._globe = new THREE.Mesh(sphereGeometry, globeMaterial);
    this._scene.add(this._globe);

    // Add controls to rotate the globe
    this._controls = new OrbitControls(this._camera, this._renderer.domElement);

    // Allow rotation but disable zoom
    this._controls.enableZoom = false;
    this._controls.enablePan = false;
  }

  private updateRendererSize(): void {
    const container = this.shadowRoot!.querySelector(
      '.renderer-container'
    ) as HTMLDivElement;
    const width = container.clientWidth;
    const height = container.clientHeight;

    this._renderer.setSize(width, height);
    this._camera.aspect = width / height;
    this._camera.updateProjectionMatrix();
  }

  private startRenderLoop = (): void => {
    requestAnimationFrame(this.startRenderLoop);

    this._globe.rotation.y += 0.01;
    this._renderer.render(this._scene, this._camera);
  };

  render(): TemplateResult<1> {
    return html`<div class="renderer-container"></div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'globe-viewer': GlobeViewer;
  }
}
